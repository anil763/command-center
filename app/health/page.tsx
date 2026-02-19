import ProgressBar from '@/components/ProgressBar';

const currentWeight = 171;
const goalWeight = 160;
const totalToLose = currentWeight - goalWeight;
const lostSoFar = 0;
const percentComplete = 0;

const habits = [
  { category: 'Nutrition', detail: 'Hit protein + whole foods target daily' },
  { category: 'Exercise', detail: 'Move daily (strength, steps, or cardio)' },
  { category: 'Sleep', detail: 'Protect 7+ hours with consistent bedtime' },
];

export default function HealthPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Health Dashboard</h2>

      <section className="card rounded-xl p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-muted">Current</p>
            <p className="text-2xl font-semibold">{currentWeight} lbs</p>
          </div>
          <div>
            <p className="text-sm text-muted">Goal</p>
            <p className="text-2xl font-semibold">{goalWeight} lbs</p>
          </div>
          <div>
            <p className="text-sm text-muted">Progress</p>
            <p className="text-2xl font-semibold">{totalToLose} lbs to go</p>
          </div>
          <div>
            <p className="text-sm text-muted">Target Date</p>
            <p className="text-2xl font-semibold">—</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm text-muted">
            <span>{currentWeight} lbs</span>
            <span>{goalWeight} lbs</span>
          </div>
          <ProgressBar value={percentComplete} color="var(--presidio)" />
          <p className="mt-2 text-sm text-muted">
            Journey complete: {percentComplete}% ({lostSoFar} lbs down of {totalToLose} lbs total)
          </p>
        </div>
      </section>

      <section className="card rounded-xl p-5">
        <h3 className="font-semibold">Mini Health Habits Checklist</h3>
        <div className="mt-3 space-y-2">
          {habits.map((habit) => (
            <div key={habit.category} className="flex items-start gap-3 rounded-lg border border-[#222222] bg-[#111111] p-3">
              <div className="mt-0.5 h-4 w-4 rounded-sm border border-border" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium">{habit.category}</p>
                <p className="text-sm text-muted">{habit.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
