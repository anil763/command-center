import DomainCard from '@/components/DomainCard';

export default function MissionPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mission Control</h2>
      <p className="text-muted">Strategic priorities for spiritual impact, revenue acceleration, and operational consistency.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <DomainCard
          title="Revenue Growth"
          color="var(--revenue)"
          points={[
            'Close 2 new UGC retainers (>$1.2k each)',
            'Upsell 6 numerology clients into premium session format',
            'Convert 15% of Vault waitlist by launch week',
          ]}
        />
        <DomainCard
          title="Brand Expansion"
          color="var(--ugc)"
          points={['Ship 3 public case studies with outcomes', 'Build creator inbound funnel from short-form clips', 'Systemize outreach cadence with 2-day SLA']}
        />
        <DomainCard
          title="Spiritual Platform"
          color="var(--spiritual)"
          points={['Publish weekly spiritual-dna longform', 'Launch Fire Horse series with daily short clips', 'Establish recurring numerology live session']}
        />
        <DomainCard
          title="90-Day Timeline"
          color="var(--presidio)"
          points={['Phase 1: Offer refinement + systems hardening', 'Phase 2: Distribution scale + partnership loops', 'Phase 3: Productized fulfillment + optimization']}
        />
      </div>
    </div>
  );
}
