"use client";

import { useMemo, useState } from 'react';
import type { DailyPayload } from '@/lib/daily';

export default function CopyScriptButton({ payload }: { payload: DailyPayload }) {
  const [copied, setCopied] = useState(false);

  const scriptText = useMemo(
    () => [
      payload.script.date,
      payload.script.energyLabel,
      `Theme: ${payload.script.title}`,
      '',
      '🎥 TikTok / Shorts Script – Practical + Clickable',
      '',
      `[HOOK – First 3–5 seconds]`,
      payload.script.hook,
      '',
      `[BODY – Relatable + Real]`,
      payload.script.body,
      '',
      `[PRACTICAL VALUE – What To Do]`,
      payload.script.practicalValue,
      '',
      `[CALL TO ACTION – Strong Close]`,
      payload.script.cta,
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
