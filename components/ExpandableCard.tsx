"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ExpandableCardProps = {
  title: string;
  color: string;
  items: { name: string; tier: string }[];
};

const tierColor: Record<string, string> = {
  Haiku: "#10b981",
  Sonnet: "#3b82f6",
  Opus: "#ec4899",
};

export default function ExpandableCard({ title, color, items }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card rounded-xl p-4" style={{ borderColor: color }}>
      <button className="flex w-full items-center justify-between" onClick={() => setOpen((v) => !v)}>
        <h3 className="font-semibold" style={{ color }}>{title}</h3>
        <ChevronDown className={`h-4 w-4 text-muted ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-3 space-y-2">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm">
              <span>{item.name}</span>
              <span className="rounded-full px-2 py-0.5 text-xs" style={{ background: `${tierColor[item.tier]}22`, color: tierColor[item.tier] }}>
                {item.tier}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
