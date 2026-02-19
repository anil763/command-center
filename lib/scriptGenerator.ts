import { DailyNumerology } from '@/lib/numerology';

export type DailyScript = {
  hook: string;
  body: string;
  practicalStep: string;
  cta: string;
  filmingTip: string;
};

function fallbackScript(n: DailyNumerology): DailyScript {
  return {
    hook: `Today carries ${n.mainEnergy} & ${n.secondaryEnergy} energy — ${n.mainMeaning} meets ${n.secondaryMeaning}. If you've been waiting for a sign, this is it.`,
    body: `${n.mainEnergy} energy is about ${n.mainMeaning.toLowerCase()}: zooming out, building the long game, and choosing aligned action over quick wins. ${n.secondaryEnergy} energy brings ${n.secondaryMeaning.toLowerCase()}, so your power today is starting with intention and moving with confidence. Ask yourself: what am I building that my future self will thank me for? Move one idea from your head into reality today.`,
    practicalStep: `Take 10 minutes, write your top 1 aligned action, then complete it before noon. Keep it simple and fully committed.`,
    cta: `Comment "${n.mainEnergy}${n.secondaryEnergy}" if you're claiming this energy today, and share this with someone who needs a reset.`,
    filmingTip: `Film near a window with natural light, start with your hook in the first 2 seconds, and keep captions bold with key words like \"${n.mainMeaning}\" and \"${n.secondaryMeaning}\" highlighted.`,
  };
}

function parseSection(content: string, key: string): string {
  const regex = new RegExp(`${key}:\\s*([\\s\\S]*?)(?=\\n(?:HOOK|BODY|PRACTICAL_STEP|CTA|FILMING_TIP):|$)`, 'i');
  const match = content.match(regex);
  return match?.[1]?.trim() ?? '';
}

async function generateWithAnthropic(n: DailyNumerology): Promise<DailyScript | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const prompt = `You are writing a daily TikTok numerology script in a warm, relatable, spiritually grounded voice.

Date: ${n.displayDate}
Main Energy: ${n.mainEnergy} (${n.mainMeaning})
Secondary Energy: ${n.secondaryEnergy} (${n.secondaryMeaning})

Write output using EXACT labels:
HOOK:
BODY:
PRACTICAL_STEP:
CTA:
FILMING_TIP:

Requirements:
- Hook: 3-5 seconds
- Body: 45-60 seconds
- Practical step: 15 seconds, actionable today
- CTA: 5-7 seconds, engagement-focused
- Filming tip: practical creator guidance
- Must specifically interpret ${n.mainEnergy} and ${n.secondaryEnergy} together.
- Do not include markdown or extra labels.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? 'claude-3-5-sonnet-20241022',
      max_tokens: 900,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) return null;
  const data = await response.json();
  const text = data?.content?.[0]?.text;
  if (!text) return null;

  const script: DailyScript = {
    hook: parseSection(text, 'HOOK'),
    body: parseSection(text, 'BODY'),
    practicalStep: parseSection(text, 'PRACTICAL_STEP'),
    cta: parseSection(text, 'CTA'),
    filmingTip: parseSection(text, 'FILMING_TIP'),
  };

  if (!script.hook || !script.body || !script.practicalStep || !script.cta || !script.filmingTip) {
    return null;
  }

  return script;
}

export async function generateDailyScript(n: DailyNumerology): Promise<DailyScript> {
  const aiScript = await generateWithAnthropic(n);
  return aiScript ?? fallbackScript(n);
}
