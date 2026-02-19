"use client";

import { useState } from "react";

const tests = [
  ["Cold email to VP Marketing at FreshBooks", "UGC > Cold Outreach (Sonnet)"],
  ["Prep reading for Sarah, DOB 3/15/82", "Spiritual > Reading Prep (Sonnet)"],
  ["Generate hashtags for UGC post", "UGC > Quick Tasks (Haiku)"],
  ["Should I lower reading prices?", "Spiritual > Strategy (Opus)"],
  ["Follow-up email after DataVault meeting", "Presidio > Meeting Prep (Sonnet)"],
  ["Satsang Saturday, prep A/V", "Ashram > Event & A/V (Sonnet)"],
  ["Revenue across everything?", "CROSS-PROJECT"],
  ["TikTok about Life Path 7", "Spiritual > TikTok (Sonnet)"],
  ["Take the Capgemini offer?", "Presidio > Career Strategy (Opus)"],
  ["Post about ashram weekend event", "Ashram > Social Media (Sonnet)"],
] as const;

export default function InteractiveRoutingTest() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {tests.map((test, idx) => (
        <button key={test[0]} onClick={() => setSelected(idx)} className="card w-full rounded-xl p-4 text-left hover:border-revenue">
          <p className="text-sm text-gray-200">{idx + 1}. “{test[0]}”</p>
          {selected === idx ? <p className="mt-2 text-sm text-revenue">→ {test[1]}</p> : <p className="mt-2 text-xs text-muted">Tap to reveal route</p>}
        </button>
      ))}
      <div className="grid gap-4 md:grid-cols-2 pt-2">
        <div className="card rounded-xl p-4">
          <p className="font-semibold">Routing Rules Summary</p>
          <ul className="mt-2 text-sm text-muted space-y-1">
            <li>• Quick/simple tasks route to Haiku</li>
            <li>• Standard production work routes to Sonnet</li>
            <li>• Strategic/high-stakes routes to Opus</li>
          </ul>
        </div>
        <div className="card rounded-xl p-4">
          <p className="font-semibold">Hard Boundaries</p>
          <ul className="mt-2 text-sm text-muted space-y-1">
            <li>• Domain data stays within project context</li>
            <li>• QC required for external messaging</li>
            <li>• Cross-project requests handled by master router</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
