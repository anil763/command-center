import ExpandableCard from "./ExpandableCard";

const projects = [
  {
    title: "🎬 Anil Creates LLC",
    color: "var(--ugc)",
    items: ["Cold Outreach", "UGC Scripts", "Client Mgmt", "Quick Tasks", "Strategy"],
    tiers: ["Sonnet", "Sonnet", "Sonnet", "Haiku", "Opus"],
  },
  {
    title: "🔮 Spiritual Technologist",
    color: "var(--spiritual)",
    items: ["Reading Prep", "TikTok", "SEO/Blog", "Vault", "Quick Tasks", "Strategy"],
    tiers: ["Sonnet", "Sonnet", "Sonnet", "Sonnet", "Haiku", "Opus"],
  },
  {
    title: "💼 Presidio",
    color: "var(--presidio)",
    items: ["Meeting Prep", "Deal Support", "Quick Tasks", "Career Strategy"],
    tiers: ["Sonnet", "Sonnet", "Haiku", "Opus"],
  },
  {
    title: "🙏 Guruji Ka Ashram",
    color: "var(--ashram)",
    items: ["Event/A/V", "Social Media", "Quick Tasks"],
    tiers: ["Sonnet", "Sonnet", "Haiku"],
  },
];

export default function ArchitectureFlow() {
  const mapped = projects.map((p) => ({ ...p, items: p.items.map((name, i) => ({ name, tier: p.tiers[i] })) }));
  return (
    <div className="space-y-4">
      <div className="card rounded-xl p-4 border-revenue">
        <p className="font-semibold text-revenue">Master Router <span className="ml-2 rounded-full bg-[#10b98122] px-2 py-0.5 text-xs text-[#10b981]">Haiku</span></p>
      </div>
      <p className="text-center text-muted">↓</p>
      <div className="grid gap-4 md:grid-cols-2">
        {mapped.map((project) => <ExpandableCard key={project.title} {...project} />)}
      </div>
      <p className="text-center text-muted">↓</p>
      <div className="card rounded-xl border-red-500 p-4">
        <p className="font-semibold text-red-400">QC Agent <span className="ml-2 rounded-full bg-[#3b82f622] px-2 py-0.5 text-xs text-[#3b82f6]">Sonnet</span></p>
      </div>
      <div className="card rounded-xl p-4">
        <p className="mb-3 text-sm text-muted">Model Tier Legend</p>
        <div className="flex gap-2 text-xs">
          <span className="rounded-full bg-[#10b98122] px-2 py-1 text-[#10b981]">Haiku</span>
          <span className="rounded-full bg-[#3b82f622] px-2 py-1 text-[#3b82f6]">Sonnet</span>
          <span className="rounded-full bg-[#ec489922] px-2 py-1 text-[#ec4899]">Opus</span>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted">Cost Distribution</p>
          <div className="h-3 w-full overflow-hidden rounded-full border border-border bg-[#1b1b1b] flex">
            <div style={{ width: "25%", background: "#10b981" }} />
            <div style={{ width: "55%", background: "#3b82f6" }} />
            <div style={{ width: "20%", background: "#ec4899" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
