const morningBlock = [
  { time: '7:00 AM', task: 'Drop off son', color: 'var(--presidio)' },
  { time: '7:30 AM', task: 'Generate daily numerology energy script', color: 'var(--spiritual)' },
  { time: '7:45 AM', task: 'Post numerology content to TikTok, Instagram, YouTube, Facebook', color: 'var(--spiritual)' },
  { time: '8:00 AM', task: 'Send daily email to spiritual list', color: 'var(--spiritual)' },
  { time: '8:10 AM', task: 'Extract 20 emails from Apollo', color: 'var(--ugc)' },
  { time: '8:20 AM', task: 'Create UGC video for UGC account', color: 'var(--ugc)' },
  { time: '8:35 AM', task: 'Send 20 cold emails to brands via GoHighLevel', color: 'var(--ugc)' },
  { time: '8:45 AM', task: 'Send brand requests on Backstage', color: 'var(--ugc)' },
  { time: '8:55 AM', task: 'Check other apps for UGC gigs (Billo, Insense, etc.)', color: 'var(--ugc)' },
];

const workBlock = [{ time: '9:00 AM', task: 'Start Presidio work (corporate day job)', color: 'var(--presidio)' }];

const eveningBlock = [{ time: 'Monday Evening', task: 'Volunteer at Guruji Ka Ashram', color: 'var(--ashram)' }];

function ScheduleBlock({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: { time: string; task: string; color: string }[];
}) {
  return (
    <section className="card rounded-xl p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={`${item.time}-${item.task}`} className="flex items-start gap-3 rounded-lg border border-[#222222] bg-[#111111] p-3">
            <div className="mt-0.5 h-4 w-4 rounded-sm border border-border" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-muted">{item.time}</p>
              <p className="text-sm" style={{ color: item.color }}>
                {item.task}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ActionsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Daily Actions Schedule</h2>
      <p className="text-sm text-muted">Time-blocked checklist for spiritual growth, UGC execution, core work, and service.</p>

      <div className="grid gap-4">
        <ScheduleBlock title="Morning Block (Pre-Work)" subtitle="Spiritual + UGC output before work" items={morningBlock} />
        <ScheduleBlock title="Work Block" subtitle="Corporate commitment" items={workBlock} />
        <ScheduleBlock title="Evening (Monday only)" subtitle="Service and community" items={eveningBlock} />
      </div>
    </div>
  );
}
