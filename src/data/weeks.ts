// Week-by-week pregnancy content. Weeks 1–40.
//
// Measurements are typical averages. Early on (through ~week 20) length is
// crown-to-rump; from week 20 it is head-to-heel — `lengthLabel` reflects this.
// Everything here is general educational content, not medical advice.

export type Trimester = 1 | 2 | 3;

export interface WeekData {
  week: number;
  trimester: Trimester;
  /** Short, warm headline for the week. */
  title: string;
  /** Fruit/veg size comparison used across pregnancy apps. */
  fruit: string;
  /** Approximate length in centimetres (null for the earliest weeks). */
  lengthCm: number | null;
  /** Whether the length is measured crown-to-rump or head-to-heel. */
  lengthLabel: 'crown to rump' | 'head to heel' | '';
  /** Approximate weight in grams (null when negligible). */
  weightG: number | null;
  /** What's happening with the baby this week. */
  baby: string;
  /** What's happening with the pregnant parent this week. */
  mom: string;
  /** Common symptoms / experiences. */
  symptoms: string[];
  /** One friendly, practical tip. */
  tip: string;
}

export const weeks: WeekData[] = [
  {
    week: 1,
    trimester: 1,
    title: 'The countdown begins',
    fruit: 'a fresh start',
    lengthCm: null,
    lengthLabel: '',
    weightG: null,
    baby:
      'You are not actually pregnant yet — week 1 is your period. Because due dates are counted from the first day of your last menstrual period, the calendar starts now even though conception is still a couple of weeks away.',
    mom:
      'Your body is shedding the previous cycle’s lining and preparing a fresh one. It is the ideal moment to begin a prenatal vitamin with folic acid, which supports healthy neural-tube development before you even conceive.',
    symptoms: ['Menstrual bleeding', 'Mild cramps', 'A normal pre-conception cycle'],
    tip: 'Start a daily prenatal with at least 400 mcg of folic acid now — the earliest weeks of development matter most.',
  },
  {
    week: 2,
    trimester: 1,
    title: 'Getting ready to conceive',
    fruit: 'an egg, ripening',
    lengthCm: null,
    lengthLabel: '',
    weightG: null,
    baby:
      'Still no baby on board — but your body is doing important prep work. An egg is maturing inside a follicle and ovulation is approaching, usually toward the end of this week for a 28-day cycle.',
    mom:
      'Rising estrogen thickens the uterine lining and your cervical mucus becomes clearer and stretchier — a sign that your fertile window has opened.',
    symptoms: ['Increased cervical mucus', 'A slight rise in libido', 'Mild ovulation twinge'],
    tip: 'This is your fertile window. If you are trying to conceive, our ovulation calculator can help you time it.',
  },
  {
    week: 3,
    trimester: 1,
    title: 'Conception',
    fruit: 'a cluster of cells',
    lengthCm: null,
    lengthLabel: '',
    weightG: null,
    baby:
      'A sperm meets the egg and fertilisation happens. The single cell rapidly divides into a tiny ball of cells called a blastocyst as it travels down the fallopian tube toward the uterus.',
    mom:
      'You won’t feel any different yet, but the genetic blueprint — including your baby’s sex — is already set. Implantation is just days away.',
    symptoms: ['No noticeable symptoms', 'Possible faint twinges'],
    tip: 'Keep caffeine moderate and skip alcohol while you wait to test — gentle habits now build a healthy foundation.',
  },
  {
    week: 4,
    trimester: 1,
    title: 'Implantation',
    fruit: 'a poppy seed',
    lengthCm: 0.1,
    lengthLabel: 'crown to rump',
    weightG: null,
    baby:
      'The blastocyst burrows into the uterine wall and splits into two parts: one becomes your baby, the other becomes the placenta. The amniotic sac is forming to cushion the months ahead.',
    mom:
      'Your body starts producing hCG — the hormone home pregnancy tests detect. A test may turn positive right around now, often with a faint line at first.',
    symptoms: ['Light implantation spotting', 'Tender breasts', 'A missed period'],
    tip: 'If you test too early and see a faint line, wait two days and test again — hCG roughly doubles every 48 hours.',
  },
  {
    week: 5,
    trimester: 1,
    title: 'A positive test',
    fruit: 'a sesame seed',
    lengthCm: 0.3,
    lengthLabel: 'crown to rump',
    weightG: null,
    baby:
      'The neural tube — the foundation of the brain and spinal cord — is forming, and a primitive heart begins to fold and flutter. Major organ systems are being mapped out.',
    mom:
      'Pregnancy hormones surge, and early symptoms can arrive fast. This is a great time to book your first prenatal appointment.',
    symptoms: ['Fatigue', 'Nausea', 'Frequent urination', 'Sore breasts'],
    tip: 'Call your provider to schedule your first appointment — most are at 8–10 weeks, and booking early secures your spot.',
  },
  {
    week: 6,
    trimester: 1,
    title: 'A flickering heartbeat',
    fruit: 'a sweet pea',
    lengthCm: 0.6,
    lengthLabel: 'crown to rump',
    weightG: null,
    baby:
      'A tiny heart is now beating, often visible on an early ultrasound at around 110 beats per minute. Limb buds appear and the face begins to take shape with dark spots where the eyes will be.',
    mom:
      'Morning sickness can peak around now — though it can strike any time of day. Smells may suddenly seem overpowering.',
    symptoms: ['Morning sickness', 'Heightened sense of smell', 'Mood swings', 'Bloating'],
    tip: 'Keep plain crackers by the bed and eat a few before you get up — an empty stomach makes nausea worse.',
  },
  {
    week: 7,
    trimester: 1,
    title: 'Growing fast',
    fruit: 'a blueberry',
    lengthCm: 1.3,
    lengthLabel: 'crown to rump',
    weightG: null,
    baby:
      'Your baby has doubled in size since last week. Hands and feet are emerging as little paddles, and the brain is generating about 100 new cells every minute.',
    mom:
      'Your uterus has roughly doubled in size. You might not look pregnant yet, but you may feel bloated and notice your waistbands getting snug.',
    symptoms: ['Excess saliva', 'Food aversions', 'Fatigue', 'Mild cramping'],
    tip: 'Aversions are normal — eat whatever stays down. Bland, cold foods often go down easier than hot, strong-smelling meals.',
  },
  {
    week: 8,
    trimester: 1,
    title: 'Tiny movements',
    fruit: 'a raspberry',
    lengthCm: 1.6,
    lengthLabel: 'crown to rump',
    weightG: 1,
    baby:
      'Webbed fingers and toes are forming, and your baby has started making tiny, spontaneous movements — far too small to feel. The tail is gone and the face is more defined.',
    mom:
      'Your blood volume is climbing to support the pregnancy, which can leave you tired and a little lightheaded. Many people have their first scan around this week.',
    symptoms: ['Dizziness', 'Constipation', 'Heartburn', 'Visible veins'],
    tip: 'Drink plenty of water and add fibre gradually to ease constipation — a common and very manageable early symptom.',
  },
  {
    week: 9,
    trimester: 1,
    title: 'From embryo to fetus',
    fruit: 'a cherry',
    lengthCm: 2.3,
    lengthLabel: 'crown to rump',
    weightG: 2,
    baby:
      'Essential organs — heart, brain, lungs, kidneys — are in place and beginning to function. Tiny muscles are forming, and the heartbeat can often be heard with a Doppler.',
    mom:
      'Your waistline may be thickening even if you are not showing. Hormone shifts can make your emotions feel closer to the surface than usual.',
    symptoms: ['Mood swings', 'Breast changes', 'Nausea', 'Fatigue'],
    tip: 'Be gentle with yourself emotionally — hormonal ups and downs are real. Rest, talk it out, and lower your expectations.',
  },
  {
    week: 10,
    trimester: 1,
    title: 'Officially a fetus',
    fruit: 'a kumquat',
    lengthCm: 3.1,
    lengthLabel: 'crown to rump',
    weightG: 4,
    baby:
      'Your baby is now officially a fetus. Vital organs are fully formed and tiny fingernails and hair follicles are starting to develop. The bones and cartilage of the legs are forming.',
    mom:
      'You may notice the first hints of a bump as your uterus grows to the size of a grapefruit. Non-invasive prenatal testing (NIPT) can be offered from now.',
    symptoms: ['Visible veins', 'Round-ligament twinges', 'Tender breasts', 'Fatigue'],
    tip: 'If you are considering genetic screening like NIPT, ask your provider now — it can usually be done from week 10.',
  },
  {
    week: 11,
    trimester: 1,
    title: 'Hiccups and kicks',
    fruit: 'a fig',
    lengthCm: 4.1,
    lengthLabel: 'crown to rump',
    weightG: 7,
    baby:
      'Your baby is moving constantly — stretching, somersaulting and even getting hiccups — though you can’t feel it yet. The head still makes up about half the body length.',
    mom:
      'For many, nausea begins to ease as the first trimester winds down. Your appetite may start to return.',
    symptoms: ['Increased appetite', 'Leg cramps', 'Vivid dreams', 'Mild breathlessness'],
    tip: 'As appetite returns, focus on nutrient-dense foods — leafy greens, beans, eggs and whole grains — rather than just calories.',
  },
  {
    week: 12,
    trimester: 1,
    title: 'Reflexes switch on',
    fruit: 'a lime',
    lengthCm: 5.4,
    lengthLabel: 'crown to rump',
    weightG: 14,
    baby:
      'Reflexes are developing — your baby’s fingers can open and close and the mouth makes sucking movements. The digestive system begins practising contractions.',
    mom:
      'Many parents have their first-trimester scan and screening around now. The risk of miscarriage drops significantly at the end of this week.',
    symptoms: ['Reduced nausea', 'Dizziness', 'Visible bump starting', 'Skin changes'],
    tip: 'The 12-week scan is a lovely milestone — bring your partner or a support person and ask for a printout if you’d like one.',
  },
  {
    week: 13,
    trimester: 1,
    title: 'Last week of trimester one',
    fruit: 'a pea pod',
    lengthCm: 7.4,
    lengthLabel: 'crown to rump',
    weightG: 23,
    baby:
      'Tiny bones are forming, vocal cords are developing, and unique fingerprints are taking shape on those little fingertips. Your baby can now curl and flex.',
    mom:
      'Welcome to the home stretch of trimester one. Energy often returns and the dreaded nausea usually fades — many call the second trimester the “honeymoon” phase.',
    symptoms: ['More energy', 'Visible bump', 'Increased libido', 'Less nausea'],
    tip: 'If you’ve been waiting to share your news, many choose to do so now that the highest-risk weeks have passed.',
  },
  {
    week: 14,
    trimester: 2,
    title: 'Hello, second trimester',
    fruit: 'a lemon',
    lengthCm: 8.7,
    lengthLabel: 'crown to rump',
    weightG: 43,
    baby:
      'Your baby can squint, frown and grimace as facial muscles develop. Fine, downy hair called lanugo begins to cover the skin to help regulate temperature.',
    mom:
      'Welcome to the second trimester — often the most comfortable stretch. Your energy is back and your bump is becoming a sweet little curve.',
    symptoms: ['Renewed energy', 'Increased appetite', 'Round-ligament pain', 'Clearer skin'],
    tip: 'Use this energy boost to tackle bigger tasks — nursery planning, antenatal classes, or simply enjoying some movement.',
  },
  {
    week: 15,
    trimester: 2,
    title: 'Sensing light',
    fruit: 'an apple',
    lengthCm: 10.1,
    lengthLabel: 'crown to rump',
    weightG: 70,
    baby:
      'Though the eyelids are still fused, your baby can now sense bright light. The legs are growing longer than the arms, and the ears are nearly in their final position.',
    mom:
      'You may notice a pregnancy “glow” from increased blood flow. Some people experience a stuffy nose or occasional nosebleeds as blood volume rises.',
    symptoms: ['Pregnancy glow', 'Stuffy nose', 'Swollen gums', 'Heartburn'],
    tip: 'Bleeding gums are common now — keep brushing gently and don’t skip dental check-ups; oral health matters in pregnancy.',
  },
  {
    week: 16,
    trimester: 2,
    title: 'First flutters',
    fruit: 'an avocado',
    lengthCm: 11.6,
    lengthLabel: 'crown to rump',
    weightG: 100,
    baby:
      'Your baby’s muscles are getting stronger and movements more coordinated. Some parents — especially in a second pregnancy — feel the first faint flutters, known as quickening.',
    mom:
      'Your uterus is rising, and the top of it can be felt about halfway between your pubic bone and navel. Many feel noticeably better and more themselves now.',
    symptoms: ['First baby flutters', 'Backache', 'Bigger appetite', 'Forgetfulness'],
    tip: 'Those first “bubble” flutters are easy to miss — lie quietly after a meal and you may notice them more clearly.',
  },
  {
    week: 17,
    trimester: 2,
    title: 'Building fat stores',
    fruit: 'a pomegranate',
    lengthCm: 13,
    lengthLabel: 'crown to rump',
    weightG: 140,
    baby:
      'Your baby starts laying down body fat, which will provide energy and warmth after birth. The umbilical cord is growing stronger and thicker.',
    mom:
      'Your centre of gravity is shifting as your bump grows, which can affect your balance. Some people notice their feet growing slightly.',
    symptoms: ['Increased appetite', 'Backache', 'Dry or itchy skin', 'Faster heartbeat'],
    tip: 'Switch to supportive, flat shoes and be mindful on stairs — your shifting balance makes small slips more likely.',
  },
  {
    week: 18,
    trimester: 2,
    title: 'Ready for a close-up',
    fruit: 'a bell pepper',
    lengthCm: 14.2,
    lengthLabel: 'crown to rump',
    weightG: 190,
    baby:
      'Your baby is yawning, hiccupping and getting more active. A protective coating called myelin is forming around the nerves, and the ears now stick out from the head.',
    mom:
      'Your anatomy scan — a detailed ultrasound — usually happens between now and week 22. It checks growth and development and can often reveal the sex if you want to know.',
    symptoms: ['Strong baby movements', 'Leg cramps', 'Swelling', 'Lower-back pain'],
    tip: 'Sleeping on your side, ideally the left, improves blood flow to your baby — a pillow between your knees helps a lot.',
  },
  {
    week: 19,
    trimester: 2,
    title: 'A protective coating',
    fruit: 'a mango',
    lengthCm: 15.3,
    lengthLabel: 'crown to rump',
    weightG: 240,
    baby:
      'A waxy white layer called vernix caseosa now coats your baby’s skin, protecting it from the amniotic fluid. The senses — smell, taste, hearing, sight and touch — are developing in the brain.',
    mom:
      'Round-ligament pain — sharp twinges on the sides of your belly — can come and go as everything stretches. You may notice skin darkening, like the linea nigra.',
    symptoms: ['Round-ligament pain', 'Skin pigmentation changes', 'Dizziness', 'Hip pain'],
    tip: 'Stand up slowly to avoid dizziness — your blood pressure is naturally lower in the second trimester.',
  },
  {
    week: 20,
    trimester: 2,
    title: 'Halfway there',
    fruit: 'a banana',
    lengthCm: 25.7,
    lengthLabel: 'head to heel',
    weightG: 300,
    baby:
      'You’re at the halfway point! Your baby is swallowing more and producing meconium — the first stool — in the developing bowel. From now, length is measured head to heel.',
    mom:
      'Your uterus has reached your navel. Many parents feel regular movement now, and the bump is unmistakable. Congratulations on making it halfway.',
    symptoms: ['Regular movements', 'Heartburn', 'Shortness of breath', 'Leg cramps'],
    tip: 'Start noticing your baby’s movement patterns — there’s no need to count yet, just get familiar with their rhythm.',
  },
  {
    week: 21,
    trimester: 2,
    title: 'Tasting the menu',
    fruit: 'a carrot',
    lengthCm: 26.7,
    lengthLabel: 'head to heel',
    weightG: 360,
    baby:
      'Your baby can taste what you eat through the amniotic fluid, helping shape future flavour preferences. Rapid eye movements suggest they may already be dreaming.',
    mom:
      'You might feel more energetic and comfortable now. Stretch marks may appear as your skin expands — they’re extremely common and fade over time.',
    symptoms: ['Stretch marks', 'Oily skin or acne', 'Warmth', 'Stronger kicks'],
    tip: 'Moisturise your bump if it feels itchy — it won’t prevent stretch marks, but it soothes tight, dry skin.',
  },
  {
    week: 22,
    trimester: 2,
    title: 'A real little person',
    fruit: 'a spaghetti squash',
    lengthCm: 27.8,
    lengthLabel: 'head to heel',
    weightG: 430,
    baby:
      'Your baby now looks like a miniature newborn, with lips, eyelids and tiny eyebrows. The sense of touch is sharpening and they may grasp the umbilical cord.',
    mom:
      'Your bump is growing steadily. Some people experience swelling in the hands and feet, and your belly button may start to pop out.',
    symptoms: ['Swollen hands and feet', 'Backache', 'Braxton Hicks', 'Increased appetite'],
    tip: 'Mild swelling is normal — elevate your feet when you can, but tell your provider about sudden or severe swelling.',
  },
  {
    week: 23,
    trimester: 2,
    title: 'Hearing your voice',
    fruit: 'a large mango',
    lengthCm: 28.9,
    lengthLabel: 'head to heel',
    weightG: 501,
    baby:
      'Your baby can hear your voice, heartbeat and digestion, and may startle at loud noises. The lungs are developing blood vessels in preparation for breathing.',
    mom:
      'You may feel your baby respond to sound and movement. Braxton Hicks “practice” contractions can show up as a brief tightening of the belly.',
    symptoms: ['Braxton Hicks contractions', 'Snoring', 'Tender gums', 'Linea nigra'],
    tip: 'Talk, sing and read to your bump — your baby is listening, and familiar voices are soothing after birth.',
  },
  {
    week: 24,
    trimester: 2,
    title: 'A key milestone',
    fruit: 'an ear of corn',
    lengthCm: 30,
    lengthLabel: 'head to heel',
    weightG: 600,
    baby:
      'Your baby reaches the age of viability — a major milestone where survival outside the womb becomes possible with specialist care. The lungs are making surfactant to help them inflate.',
    mom:
      'You’ll usually be offered glucose screening for gestational diabetes between now and week 28. Your bump is prominent and movements are strong.',
    symptoms: ['Strong movements', 'Itchy skin', 'Blurred vision', 'Swelling'],
    tip: 'Don’t skip your glucose test — gestational diabetes often has no symptoms but is very manageable when caught early.',
  },
  {
    week: 25,
    trimester: 2,
    title: 'Filling out',
    fruit: 'a cauliflower',
    lengthCm: 34.6,
    lengthLabel: 'head to heel',
    weightG: 660,
    baby:
      'Your baby is gaining baby fat and the skin is becoming less wrinkled and more opaque. Hair is growing and starting to show colour and texture.',
    mom:
      'You may notice your bump growing more quickly now. Some people develop haemorrhoids or constipation as the uterus presses on the bowel.',
    symptoms: ['Haemorrhoids', 'Constipation', 'Restless legs', 'Frequent urination'],
    tip: 'Fibre, fluids and gentle movement keep things moving and ease the pressure-related aches of mid-pregnancy.',
  },
  {
    week: 26,
    trimester: 2,
    title: 'Eyes open',
    fruit: 'a head of lettuce',
    lengthCm: 35.6,
    lengthLabel: 'head to heel',
    weightG: 760,
    baby:
      'Your baby’s eyes begin to open and they can blink. The lungs are practising breathing movements, inhaling and exhaling amniotic fluid to get ready for that first breath.',
    mom:
      'Your bump may be making sleep and movement less comfortable. Rising blood pressure should be monitored at each visit.',
    symptoms: ['Trouble sleeping', 'Rib pain', 'Headaches', 'Braxton Hicks'],
    tip: 'A pregnancy pillow and a cool, dark room make a real difference to sleep as your bump gets bigger.',
  },
  {
    week: 27,
    trimester: 2,
    title: 'Last week of trimester two',
    fruit: 'a head of cauliflower',
    lengthCm: 36.6,
    lengthLabel: 'head to heel',
    weightG: 875,
    baby:
      'Your baby’s brain is very active and they now have regular sleep and wake cycles. They may suck their thumb and respond to your touch through the bump.',
    mom:
      'This is the final week of the second trimester. You may start thinking about birth plans, antenatal classes and the practicalities of the months ahead.',
    symptoms: ['Leg cramps', 'Heartburn', 'Shortness of breath', 'Mood shifts'],
    tip: 'Now is a good time to book antenatal or birth-preparation classes — popular ones fill up early.',
  },
  {
    week: 28,
    trimester: 3,
    title: 'Welcome to trimester three',
    fruit: 'an eggplant',
    lengthCm: 37.6,
    lengthLabel: 'head to heel',
    weightG: 1005,
    baby:
      'Your baby can now blink, dream and is adding fat fast. The eyes can detect light filtering through the womb, and they’re building the strength they’ll need to breathe air.',
    mom:
      'Welcome to the third trimester. Prenatal visits usually become more frequent — every two weeks for a while, then weekly near the end.',
    symptoms: ['Shortness of breath', 'Fatigue returns', 'Backache', 'Braxton Hicks'],
    tip: 'Start counting kicks daily — pick a time your baby is active and note how long 10 movements take. Tell your provider of any drop.',
  },
  {
    week: 29,
    trimester: 3,
    title: 'Stronger every day',
    fruit: 'a butternut squash',
    lengthCm: 38.6,
    lengthLabel: 'head to heel',
    weightG: 1153,
    baby:
      'Muscles and lungs are maturing and your baby’s head is growing to make room for the developing brain. Bones are fully formed but still soft, soaking up calcium from you.',
    mom:
      'You may feel hungrier as your baby grows. Iron and calcium needs are high now, so nutrient-rich meals matter more than ever.',
    symptoms: ['Heartburn', 'Varicose veins', 'Frequent urination', 'Itchy bump'],
    tip: 'Boost iron with lean meat, beans and leafy greens, paired with vitamin C to help absorption and prevent anaemia.',
  },
  {
    week: 30,
    trimester: 3,
    title: 'Three quarters there',
    fruit: 'a large cabbage',
    lengthCm: 39.9,
    lengthLabel: 'head to heel',
    weightG: 1319,
    baby:
      'Your baby’s brain is developing the grooves and wrinkles that give it more surface area. The soft lanugo hair starts to disappear as fat takes over temperature regulation.',
    mom:
      'You’re three-quarters of the way there. Fatigue and mood swings can return, and finding a comfortable position is getting trickier.',
    symptoms: ['Fatigue', 'Mood swings', 'Heartburn', 'Swollen feet'],
    tip: 'Be kind to your energy levels — rest when you can and lower the bar on non-essential tasks. You’re doing a lot.',
  },
  {
    week: 31,
    trimester: 3,
    title: 'Running out of room',
    fruit: 'a coconut',
    lengthCm: 41.1,
    lengthLabel: 'head to heel',
    weightG: 1502,
    baby:
      'Your baby can turn their head from side to side and is putting on weight quickly. All five senses are now working, and they process information from their environment.',
    mom:
      'Your breasts may begin leaking colostrum — the nutrient-rich first milk. Braxton Hicks contractions may become more noticeable.',
    symptoms: ['Leaking colostrum', 'Braxton Hicks', 'Backache', 'Trouble sleeping'],
    tip: 'A little leaking is normal — breast pads keep you comfortable. Severe or painful contractions, though, warrant a call.',
  },
  {
    week: 32,
    trimester: 3,
    title: 'Getting into position',
    fruit: 'a jicama',
    lengthCm: 42.4,
    lengthLabel: 'head to heel',
    weightG: 1702,
    baby:
      'Your baby likely settles into a head-down position to prepare for birth, though some still turn later. The skin is becoming opaque and toenails are fully formed.',
    mom:
      'As your baby takes up more space, you may feel breathless and notice stronger kicks under your ribs. Naps may become a survival tool.',
    symptoms: ['Shortness of breath', 'Heartburn', 'Braxton Hicks', 'Swelling'],
    tip: 'Sit up straight and give your lungs room — good posture eases breathlessness as your baby presses upward.',
  },
  {
    week: 33,
    trimester: 3,
    title: 'Bones and brains',
    fruit: 'a pineapple',
    lengthCm: 43.7,
    lengthLabel: 'head to heel',
    weightG: 1918,
    baby:
      'The bones are hardening, though the skull stays soft and flexible to ease the journey through the birth canal. Your baby’s immune system is gaining antibodies from you.',
    mom:
      'You may feel warm and find sleep elusive. Aches in your back and pelvis are common as your body produces relaxin to loosen the joints.',
    symptoms: ['Pelvic pain', 'Insomnia', 'Feeling hot', 'Clumsiness'],
    tip: 'A warm (not hot) bath, gentle stretching and a consistent wind-down routine can make restless nights a little easier.',
  },
  {
    week: 34,
    trimester: 3,
    title: 'Almost ready lungs',
    fruit: 'a cantaloupe',
    lengthCm: 45,
    lengthLabel: 'head to heel',
    weightG: 2146,
    baby:
      'Your baby’s lungs are nearly mature and the central nervous system is fine-tuning. The vernix coating thickens to protect the skin in these final weeks.',
    mom:
      'Your provider may check your baby’s position. It’s a good time to finalise your hospital bag and birth preferences.',
    symptoms: ['Fatigue', 'Blurred vision', 'Swelling', 'Frequent urination'],
    tip: 'Pack your hospital bag now so it’s ready to grab — include items for you, your baby and your birth partner.',
  },
  {
    week: 35,
    trimester: 3,
    title: 'Snuggling in',
    fruit: 'a honeydew melon',
    lengthCm: 46.2,
    lengthLabel: 'head to heel',
    weightG: 2383,
    baby:
      'Your baby is filling out the womb, so movements feel more like rolls and stretches than kicks. The kidneys are fully developed and the liver can process some waste.',
    mom:
      'You may waddle a little as your pelvis loosens. Heartburn and the need to pee often can peak as your baby sits low.',
    symptoms: ['Pelvic pressure', 'Heartburn', 'Frequent urination', 'Braxton Hicks'],
    tip: 'Learn the signs of labour now — and the difference between Braxton Hicks and the real, regular, intensifying kind.',
  },
  {
    week: 36,
    trimester: 3,
    title: 'Dropping down',
    fruit: 'a head of romaine lettuce',
    lengthCm: 47.4,
    lengthLabel: 'head to heel',
    weightG: 2622,
    baby:
      'Your baby may “drop” lower into your pelvis, a process called lightening. They’re shedding most of the lanugo and vernix, swallowing it along with amniotic fluid.',
    mom:
      'If your baby drops, breathing may get easier but pelvic pressure increases. Weekly prenatal visits usually begin around now.',
    symptoms: ['Pelvic pressure', 'Easier breathing', 'Frequent urination', 'Loosening joints'],
    tip: 'Confirm your route to the hospital or birth centre and who’s on call — having a plan reduces last-minute stress.',
  },
  {
    week: 37,
    trimester: 3,
    title: 'Early term',
    fruit: 'a bunch of Swiss chard',
    lengthCm: 48.6,
    lengthLabel: 'head to heel',
    weightG: 2859,
    baby:
      'Your baby is now considered “early term.” They’re practising breathing, sucking and gripping, and could arrive at any time, though a few more weeks inside is ideal.',
    mom:
      'You may notice a “bloody show” or that your mucus plug has come away — signs your body is preparing. Nesting urges can kick in.',
    symptoms: ['Nesting instinct', 'Loose stools', 'Mucus plug loss', 'Strong Braxton Hicks'],
    tip: 'Rest as much as you nest — conserving energy now will serve you well during labour and the newborn days ahead.',
  },
  {
    week: 38,
    trimester: 3,
    title: 'Any day now',
    fruit: 'a leek',
    lengthCm: 49.8,
    lengthLabel: 'head to heel',
    weightG: 3083,
    baby:
      'Your baby has a firm grasp and their organs are ready for life outside. The brain and lungs continue to mature right up until birth, and eye colour may still change after.',
    mom:
      'You’re full term very soon. Watch for signs of labour: regular contractions, your waters breaking, or persistent lower-back pain.',
    symptoms: ['Pelvic pressure', 'Swollen ankles', 'Trouble sleeping', 'Anxiety or excitement'],
    tip: 'Time any regular contractions with our contraction timer — the 5-1-1 pattern is a classic cue to call your provider.',
  },
  {
    week: 39,
    trimester: 3,
    title: 'Full term',
    fruit: 'a mini watermelon',
    lengthCm: 50.7,
    lengthLabel: 'head to heel',
    weightG: 3288,
    baby:
      'Your baby is full term and ready to meet you. They’re still building a layer of fat for temperature control, and the umbilical cord is passing along antibodies for immunity.',
    mom:
      'The waiting can feel endless. Keep an eye out for labour signs and stay in touch with your provider about movement and any changes.',
    symptoms: ['Lightning crotch', 'Diarrhoea', 'Contractions', 'Restlessness'],
    tip: 'Keep tracking your baby’s movements — a noticeable change or decrease is always worth a prompt call to your provider.',
  },
  {
    week: 40,
    trimester: 3,
    title: 'Meeting your baby',
    fruit: 'a small pumpkin',
    lengthCm: 51.2,
    lengthLabel: 'head to heel',
    weightG: 3462,
    baby:
      'It’s your due date! Only about 1 in 20 babies arrive exactly on time — many come a little before or after. Your baby is fully developed and ready for their first cuddle.',
    mom:
      'If your baby hasn’t arrived, your provider will talk through monitoring and options like membrane sweeps or induction if you go past your date.',
    symptoms: ['Strong contractions', 'Waters breaking', 'Cervical changes', 'Anticipation'],
    tip: 'Going past your due date is common and usually fine — your provider will monitor closely. Hang in there; you’re so close.',
  },
];

export function getWeek(week: number): WeekData | undefined {
  return weeks.find((w) => w.week === week);
}

export function trimesterName(t: Trimester): string {
  return t === 1 ? 'First' : t === 2 ? 'Second' : 'Third';
}

export function trimesterAccent(t: Trimester): string {
  return t === 1 ? 'var(--peach)' : t === 2 ? 'var(--sage)' : 'var(--mulberry)';
}
