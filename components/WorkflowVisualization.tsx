const chains = [
  {
    title: "1. Blog → Social (Spiritual)",
    steps: ["SEO Blog (Sonnet)", "Extract (Haiku)", "Hashtags (Haiku)"],
  },
  {
    title: "2. Lead → Outreach (UGC)",
    steps: ["Cold Outreach (Sonnet)", "QC (Sonnet)"],
  },
  {
    title: "3. Booking → Reading (Spiritual)",
    steps: ["Reading Prep (Sonnet)", "Confirmation (Haiku)"],
  },
];

export default function WorkflowVisualization() {
  return (
    <div className="space-y-4">
      {chains.map((chain) => (
        <div key={chain.title} className="card rounded-xl p-4">
          <p className="font-semibold">{chain.title}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            {chain.steps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-[#222222] bg-[#111111] px-3 py-1">{step}</span>
                {idx !== chain.steps.length - 1 ? <span className="text-muted">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
