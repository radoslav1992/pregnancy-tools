// Tiny persistence layer shared by the calculator, the dashboard, and the
// service worker. The due date lives in BOTH localStorage (fast, synchronous)
// and IndexedDB (so the service worker can read it for notifications).

export interface Pregnancy {
  /** Estimated due date as an ISO string. */
  edd: string;
  savedAt: number;
}

const LS_KEY = 'mb_pregnancy';
const DB_NAME = 'mb-db';
const STORE = 'kv';
const IDB_KEY = 'pregnancy';

export function savePregnancy(edd: Date): Pregnancy {
  const data: Pregnancy = { edd: edd.toISOString(), savedAt: Date.now() };
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch {
    /* storage may be unavailable */
  }
  void idbSet(IDB_KEY, data);
  return data;
}

export function loadPregnancy(): Pregnancy | null {
  try {
    const v = localStorage.getItem(LS_KEY);
    if (v) return JSON.parse(v) as Pregnancy;
  } catch {
    /* ignore */
  }
  return null;
}

export function clearPregnancy(): void {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    /* ignore */
  }
  void idbDelete(IDB_KEY);
}

/** Gestational progress derived from an EDD, relative to `now`. */
export function progressFromEdd(edd: Date, now: Date = new Date()) {
  const DAY = 86400000;
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  const gaDays = Math.max(0, Math.min(308, Math.round(280 - (edd.getTime() - d.getTime()) / DAY)));
  const week = Math.floor(gaDays / 7);
  const day = gaDays % 7;
  const daysLeft = Math.round((edd.getTime() - d.getTime()) / DAY);
  const trimester = week < 14 ? 1 : week < 28 ? 2 : 3;
  const frac = Math.max(0, Math.min(1, gaDays / 280));
  return { gaDays, week, day, daysLeft, trimester, frac };
}

// ---- minimal IndexedDB key/value helpers ----
function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbSet(key: string, value: unknown): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    /* IndexedDB may be unavailable (e.g. private mode) */
  }
}

async function idbDelete(key: string): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    /* ignore */
  }
}
