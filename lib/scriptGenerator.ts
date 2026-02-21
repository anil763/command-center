import { DailyNumerology, reduceToDigit } from '@/lib/numerology';

type EnergyProfile = {
  title: string;
  core: string;
  showsUp: string;
  feelsLike: string;
  doToday: string;
  avoidToday: string;
  creatorExample: string;
  ctaAngle: string;
  filmingTone: string;
};

export type DailyScript = {
  date: string;
  energyLabel: string;
  title: string;
  hook: string;
  body: string;
  practicalValue: string;
  cta: string;
};

const ENERGY_PROFILES: Record<number, EnergyProfile> = {
  1: {
    title: 'Initiator',
    core: 'leadership, initiation, independence, and new beginnings',
    showsUp: 'a push to stop waiting and start moving on your idea',
    feelsLike: 'clarity, urgency, and a healthy "I can do this" confidence',
    doToday: 'make the first move, decide quickly, and take ownership',
    avoidToday: 'overthinking, waiting for perfect timing, or asking everyone for permission',
    creatorExample: 'post the first version of your offer, series, or brand story even if it is not perfect yet',
    ctaAngle: 'new beginning they are claiming',
    filmingTone: 'confident, direct, and forward-moving',
  },
  2: {
    title: 'Diplomat',
    core: 'partnership, balance, duality, intuition, and diplomacy',
    showsUp: 'sensitive communication, reading between the lines, and relationship awareness',
    feelsLike: 'emotional sensitivity, softness, and desire for harmony',
    doToday: 'collaborate, listen deeply, and choose timing over force',
    avoidToday: 'people-pleasing, mixed signals, or suppressing your needs',
    creatorExample: 'co-create content, send a thoughtful follow-up, or repair a strained conversation',
    ctaAngle: 'relationship they want to harmonize',
    filmingTone: 'warm, gentle, and reassuring',
  },
  3: {
    title: 'Messenger',
    core: 'communication, creativity, expression, joy, and social energy',
    showsUp: 'fresh ideas, storytelling flow, and visibility opportunities',
    feelsLike: 'playful confidence, inspiration, and desire to be seen',
    doToday: 'speak up, publish, teach, and share your authentic voice',
    avoidToday: 'rambling, distraction, or performing instead of connecting',
    creatorExample: 'record a quick story-based reel that teaches one clear lesson',
    ctaAngle: 'message they need to express',
    filmingTone: 'animated, expressive, and upbeat',
  },
  4: {
    title: 'Builder',
    core: 'foundation, structure, stability, discipline, and grounded effort',
    showsUp: 'focus on systems, routines, and what is practical long term',
    feelsLike: 'serious focus, responsibility, and desire for order',
    doToday: 'plan, simplify, and execute one concrete process improvement',
    avoidToday: 'rigidity, pessimism, or getting lost in tiny details',
    creatorExample: 'build your weekly posting workflow or clean up your client onboarding process',
    ctaAngle: 'system they are building',
    filmingTone: 'steady, clear, and grounded',
  },
  5: {
    title: 'Explorer',
    core: 'freedom, change, adventure, adaptability, and curiosity',
    showsUp: 'unexpected opportunities, pivots, and experimentation',
    feelsLike: 'restlessness, excitement, and hunger for expansion',
    doToday: 'test a new angle, audience, or format and stay flexible',
    avoidToday: 'impulsive choices, scattered attention, or reckless risk',
    creatorExample: 'test a new hook style or content category and compare response data',
    ctaAngle: 'change they are embracing',
    filmingTone: 'energetic, dynamic, and curious',
  },
  6: {
    title: 'Nurturer',
    core: 'responsibility, care, relationships, harmony, and service',
    showsUp: 'family focus, client care, and desire to protect what matters',
    feelsLike: 'heart-led responsibility and emotional maturity',
    doToday: 'lead with service, create support, and strengthen key relationships',
    avoidToday: 'overgiving, guilt-driven decisions, or rescuing everyone',
    creatorExample: 'publish a piece of content that solves one real pain point for your audience',
    ctaAngle: 'person they will support today',
    filmingTone: 'heart-centered, sincere, and grounded',
  },
  7: {
    title: 'Seeker',
    core: 'spiritual introspection, wisdom, analysis, and inner truth',
    showsUp: 'deep thinking, pattern recognition, and desire for meaningful alignment',
    feelsLike: 'quiet focus, sensitivity, and a need for space',
    doToday: 'reflect, study, and make decisions from clarity instead of noise',
    avoidToday: 'isolation spirals, cynicism, or analysis paralysis',
    creatorExample: 'share one deeper insight from your own journey instead of surface tips',
    ctaAngle: 'insight they are integrating',
    filmingTone: 'calm, reflective, and intentional',
  },
  8: {
    title: 'Executive',
    core: 'power, abundance, material success, authority, and karmic results',
    showsUp: 'money conversations, leadership opportunities, and accountability themes',
    feelsLike: 'ambition, intensity, and strategic focus',
    doToday: 'prioritize high-impact work, negotiate value, and lead boldly',
    avoidToday: 'control battles, ego-driven decisions, or short-term greed',
    creatorExample: 'raise your standards by refining pricing, boundaries, or offer positioning',
    ctaAngle: 'bold move they are making',
    filmingTone: 'strong, concise, and powerful',
  },
  9: {
    title: 'Humanitarian',
    core: 'completion, compassion, universal love, endings, and wisdom',
    showsUp: 'closure, forgiveness, and letting go of what no longer aligns',
    feelsLike: 'emotional release and soul-level perspective',
    doToday: 'finish loose ends, release old narratives, and serve from compassion',
    avoidToday: 'martyrdom, clinging to expired commitments, or emotional exhaustion',
    creatorExample: 'close an old chapter and communicate the lesson your audience can apply today',
    ctaAngle: 'what they are ready to release',
    filmingTone: 'compassionate, mature, and soulful',
  },
  11: {
    title: 'Intuitive Channel',
    core: 'intuition, spiritual insight, inspiration, and enlightenment',
    showsUp: 'meaningful signs, creative downloads, and heightened sensitivity',
    feelsLike: 'electric intuition with moments of emotional intensity',
    doToday: 'slow down enough to hear guidance, then act on one clear download',
    avoidToday: 'doubt loops, spiritual bypassing, or ignoring your inner voice',
    creatorExample: 'speak to camera about a message that came through and why it matters now',
    ctaAngle: 'intuition they are trusting',
    filmingTone: 'inspired, present, and magnetic',
  },
  22: {
    title: 'Master Builder',
    core: 'mastermind strategy, visionary planning, systems, and legacy-building',
    showsUp: 'big ideas that need practical structure and execution discipline',
    feelsLike: 'pressure to think bigger while staying methodical',
    doToday: 'choose the long-game move and break vision into tangible next steps',
    avoidToday: 'playing small, perfection paralysis, or abandoning the big picture',
    creatorExample: 'turn one large dream into a 90-day execution roadmap and start day one now',
    ctaAngle: 'legacy project they are starting',
    filmingTone: 'bold, strategic, and visionary',
  },
  33: {
    title: 'Master Teacher',
    core: 'healing, compassion, spiritual guidance, and service-led leadership',
    showsUp: 'teaching moments, mentoring opportunities, and emotional healing conversations',
    feelsLike: 'deep empathy with a call to lead through love',
    doToday: 'teach from lived experience and give practical hope',
    avoidToday: 'self-neglect, savior complex, or carrying everyone else emotionally',
    creatorExample: 'create a short lesson that helps someone heal and move one step forward',
    ctaAngle: 'lesson they are ready to teach or live',
    filmingTone: 'nurturing, wise, and clear',
  },
};

function getEnergyProfile(energy: number): EnergyProfile {
  return ENERGY_PROFILES[energy] ?? ENERGY_PROFILES[reduceToDigit(energy)];
}

export async function generateDailyScript(n: DailyNumerology): Promise<DailyScript> {
  const main = getEnergyProfile(n.mainEnergy);
  const secondary = getEnergyProfile(n.secondaryEnergy);

  // Generate hook (3-5 second opener)
  const hookOptions = [
    `If you feel ${main.feelsLike.toLowerCase()}... but also ${secondary.feelsLike.toLowerCase()} today — this is why.`,
    `Today's a mix of ${main.title.toLowerCase()} and ${secondary.title.toLowerCase()} — and that creates tension.`,
    `You might feel restless about ${main.showsUp.toLowerCase()}... but hesitant because of ${secondary.showsUp.toLowerCase()}.`,
  ];
  const hook = hookOptions[0];

  // Generate body (relatable + real)
  const bodyText = `Today's main energy is ${n.mainEnergy} — ${main.core.toLowerCase()}. The secondary energy is ${n.secondaryEnergy} — ${secondary.core.toLowerCase()}. This creates tension.

Part of you: ${main.feelsLike.toLowerCase()}.
Part of you: ${secondary.feelsLike.toLowerCase()}.

You may feel:
• ${main.feelsLike.toLowerCase()}
• ${secondary.feelsLike.toLowerCase()}
• A mix of both pulling different directions

That's ${n.mainEnergy} wanting ${main.showsUp.toLowerCase()}. And ${n.secondaryEnergy} wanting ${secondary.showsUp.toLowerCase()}.

The move today: ${main.doToday.toLowerCase()}, but with ${secondary.doToday.toLowerCase()}.`;

  // Generate practical value (actionable steps)
  const practicalValue = `Do this today:
1️⃣ Name where you feel the tension (${main.title.toLowerCase()} vs ${secondary.title.toLowerCase()}).
2️⃣ Instead of forcing it — soften your approach.
3️⃣ Make the change, but keep the care.

Example: Instead of "${main.creatorExample.toLowerCase()}" — try "${secondary.creatorExample.toLowerCase()}".

Small shifts under ${n.mainEnergy} & ${n.secondaryEnergy} prevent big messes.`;

  // Generate CTA
  const ctaText = `Comment "I move smart" if you're choosing aligned action today. Drop your life path below — I'll tell you how this energy hits your chart.`;

  // Generate title
  const titleOptions = [
    `Feeling Off? Don't ${main.title.toUpperCase()}.`,
    `The ${main.title.toUpperCase()}/${secondary.title.toUpperCase()} Tension Is Real.`,
    `Want Change? Do This Instead.`,
  ];
  const title = titleOptions[0];

  return {
    date: n.displayDate,
    energyLabel: `${n.mainEnergy} & ${n.secondaryEnergy} Energy`,
    title,
    hook: `🔥 "${hook}" (Pause)`,
    body: bodyText,
    practicalValue: practicalValue,
    cta: `🔥 ${ctaText}`,
  };
}
