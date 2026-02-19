import { NextRequest, NextResponse } from 'next/server';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { generateDailyScript } from '@/lib/scriptGenerator';
import { getDailyNumerology } from '@/lib/numerology';
import type { DailyPayload } from '@/lib/daily';

export const dynamic = 'force-dynamic';

function dailyDir(): string {
  return process.env.DAILY_SCRIPTS_DIR ?? path.resolve(process.cwd(), '..', 'brain', 'daily');
}

function filePathFor(dateISO: string): string {
  return path.join(dailyDir(), `${dateISO}.json`);
}

async function readCached(dateISO: string): Promise<DailyPayload | null> {
  try {
    const content = await readFile(filePathFor(dateISO), 'utf-8');
    return JSON.parse(content) as DailyPayload;
  } catch {
    return null;
  }
}

async function persist(payload: DailyPayload): Promise<void> {
  await mkdir(dailyDir(), { recursive: true });
  await writeFile(filePathFor(payload.dateISO), JSON.stringify(payload, null, 2), 'utf-8');
}

async function generateAndStore(force = false): Promise<DailyPayload> {
  const numerology = getDailyNumerology();

  if (!force) {
    const cached = await readCached(numerology.dateISO);
    if (cached) return cached;
  }

  const script = await generateDailyScript(numerology);

  const payload: DailyPayload = {
    dateISO: numerology.dateISO,
    displayDate: numerology.displayDate,
    energyLabel: numerology.label,
    mainEnergy: numerology.mainEnergy,
    secondaryEnergy: numerology.secondaryEnergy,
    meanings: `${numerology.mainMeaning} + ${numerology.secondaryMeaning}`,
    script,
    generatedAt: new Date().toISOString(),
  };

  try {
    await persist(payload);
  } catch {
    // Ignore write failures in read-only environments.
  }

  return payload;
}

export async function GET(request: NextRequest) {
  const force = request.nextUrl.searchParams.get('refresh') === '1';
  const payload = await generateAndStore(force);
  return NextResponse.json(payload);
}
