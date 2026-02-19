"use client";

import { useMemo, useState } from 'react';
import type { DailyPayload } from '@/lib/daily';

export default function CopyScriptButton({ payload }: { payload: DailyPayload }) {
  const [copied, setCopied] = useState(false);

  const scriptText = useMemo(
    () => [
      payload.script.headerLine,
      payload.script.introLine,
      '',
      payload.script.themeTitle,
      payload.script.themeLine,
      '',
      `Main Energy: ${payload.script.mainEnergyMeaning}`,
      `Secondary Energy: ${payload.script.secondaryEnergyMeaning}`,
      '',
      `HOOK (3-5 sec): ${payload.script.hook}`,
      '',
      `BODY (60-90 sec): ${payload.script.body}`,
      '',
      `PRACTICAL STEP (15 sec): ${payload.script.practicalStep}`,
      '',
      `CALL TO ACTION (5-7 sec): ${payload.script.cta}`,
      '',
      `PRO FILMING TIP: ${payload.script.filmingTip}`,
    ].join('\n'),
    [payload],
  );

  async function onCopy() {
    await navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={onCopy}
      className="interactive rounded-xl border border-[color:var(--spiritual)]/60 bg-[color:var(--spiritual)]/20 px-4 py-2 text-sm font-semibold text-[color:var(--spiritual)] hover:-translate-y-0.5"
      type="button"
    >
      {copied ? 'Copied ✓' : 'Copy Full Script'}
    </button>
  );
}
