'use client';

import { type ReactNode, useEffect, useMemo, useState } from 'react';
import ProgressBar from '@/components/ProgressBar';

type DailyMetrics = {
  fastingGlucose: string;
  postMeal1: string;
  postMeal2: string;
  weightToday: string;
  waterOz: string;
  sodiumMg: string;
  sleepQuality: string;
  sleepHours: string;
  stressAm: string;
  stressPm: string;
  tinnitusAm: string;
  tinnitusPm: string;
  exerciseDone: boolean;
  exerciseType: string;
  spiritual: Record<string, boolean>;
  supplements: Record<string, boolean>;
  windDown: Record<string, boolean>;
  meniereTriggers: string;
};

const currentWeight = 171;
const goalWeight = 160;
const a1cCurrent = 7.2;
const a1cGoal = 6.0;
const monthWeightTarget = 167;
const estimatedA1c = 6.9;
const planStartDate = '2026-02-17';

const spiritualItems = [
  'Wake + 3 Gratitudes',
  'Nadi Shodhana breathwork (10 rounds)',
  'Meditation (10-15 min)',
  'Set daily intention',
  'Journaling',
  'Yoga Nidra or body scan',
];

const supplementSchedule = [
  { name: 'TRT protocol (as prescribed)', time: 'Morning' },
  { name: 'Vitamin D3 + K2', time: 'With first meal' },
  { name: 'Omega-3', time: 'Lunch' },
  { name: 'Magnesium glycinate', time: 'Evening' },
  { name: 'Electrolytes (low sodium)', time: 'Post-workout / midday' },
];

const workoutsByDay: Record<string, { title: string; totalGym?: string[]; recovery: string }> = {
  Monday: {
    title: 'Strength A + 20 min walk',
    totalGym: ['Chest Press', 'Seated Row', 'Squats', 'Core Plank'],
    recovery: 'Light stretch + hydration focus',
  },
  Tuesday: {
    title: 'Zone 2 cardio + mobility',
    recovery: 'Breathwork + early bedtime',
  },
  Wednesday: {
    title: 'Strength B + 20 min walk',
    totalGym: ['Lat Pulldown', 'Leg Press', 'Shoulder Press', 'Bird Dog'],
    recovery: 'Foam roll + low sodium dinner',
  },
  Thursday: {
    title: 'Recovery day (walk + vestibular)',
    recovery: 'Long mobility session + stress downshift',
  },
  Friday: {
    title: 'Strength C + short cardio finisher',
    totalGym: ['Incline Press', 'Cable Row', 'Romanian Deadlift', 'Dead Bug'],
    recovery: 'Magnesium + wind-down ritual',
  },
  Saturday: {
    title: 'Long walk / bike + light core',
    recovery: 'Hydration + meal prep reset',
  },
  Sunday: {
    title: 'Full rest + weekly check-in',
    recovery: 'Reset, reflect, and plan next week',
  },
};

const weeklySchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const ifDays = new Set(['Monday', 'Wednesday', 'Friday']);

const defaultMetrics: DailyMetrics = {
  fastingGlucose: '',
  postMeal1: '',
  postMeal2: '',
  weightToday: '',
  waterOz: '',
  sodiumMg: '',
  sleepQuality: '',
  sleepHours: '',
  stressAm: '',
  stressPm: '',
  tinnitusAm: '',
  tinnitusPm: '',
  exerciseDone: false,
  exerciseType: '',
  spiritual: Object.fromEntries(spiritualItems.map((item) => [item, false])),
  supplements: Object.fromEntries(supplementSchedule.map((item) => [item.name, false])),
  windDown: {
    'Warm shower': false,
    'Herbal tea': false,
    Journaling: false,
    Meditation: false,
  },
  meniereTriggers: '',
};

function getRoadmapPhase(daysElapsed: number) {
  if (daysElapsed <= 22) return { phase: 'Foundation', next: 'Build' };
  if (daysElapsed <= 45) return { phase: 'Build', next: 'Deepen' };
  if (daysElapsed <= 68) return { phase: 'Deepen', next: 'Optimize' };
  return { phase: 'Optimize', next: 'Maintenance Cycle' };
}

export default function HealthPage() {
  const now = new Date();
  const today = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = now.toLocaleDateString('en-US', { month: 'long' });
  const dateKey = now.toISOString().slice(0, 10);

  const [metrics, setMetrics] = useState<DailyMetrics>(defaultMetrics);

  useEffect(() => {
    const saved = localStorage.getItem(`health-metrics-${dateKey}`);
    if (saved) {
      setMetrics({ ...defaultMetrics, ...JSON.parse(saved) });
    }
  }, [dateKey]);

  useEffect(() => {
    localStorage.setItem(`health-metrics-${dateKey}`, JSON.stringify(metrics));
  }, [metrics, dateKey]);

  const totalToLose = currentWeight - goalWeight;
  const lostSoFar = Math.max(0, currentWeight - Number(metrics.weightToday || currentWeight));
  const weightProgress = Math.max(0, Math.min(100, (lostSoFar / totalToLose) * 100));
  const a1cProgress = Math.max(0, Math.min(100, ((a1cCurrent - estimatedA1c) / (a1cCurrent - a1cGoal)) * 100));

  const hydrationProgress = Math.max(0, Math.min(100, (Number(metrics.waterOz || 0) / 100) * 100));
  const sodiumProgress = Math.max(0, Math.min(100, (Number(metrics.sodiumMg || 0) / 1500) * 100));
  const monthlyDenominator = Math.max(1, currentWeight - monthWeightTarget);
  const monthlyProgress = Math.max(0, Math.min(100, ((currentWeight - Number(metrics.weightToday || currentWeight)) / monthlyDenominator) * 100));

  const start = new Date(planStartDate);
  const daysElapsed = Math.max(1, Math.ceil((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const roadmap = getRoadmapPhase(daysElapsed);
  const isSunday = dayName === 'Sunday';
  const isIFDay = ifDays.has(dayName);

  const todayWorkout = workoutsByDay[dayName] ?? workoutsByDay.Monday;

  const checklistCompletion = useMemo(() => {
    const all = [...Object.values(metrics.spiritual), ...Object.values(metrics.supplements), ...Object.values(metrics.windDown)];
    const complete = all.filter(Boolean).length;
    return Math.round((complete / all.length) * 100);
  }, [metrics]);

  return (
    <div className="space-y-6 pb-8">
      <div className="card rounded-xl p-5">
        <p className="text-sm text-muted">Daily Health Execution Dashboard</p>
        <h1 className="text-2xl font-bold text-white">Health Command Center</h1>
        <p className="text-sm text-muted">{today}</p>
      </div>

      <section className="card rounded-xl p-5">
        <h2 className="mb-4 text-lg font-semibold">1) Health Snapshot</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <Stat label="Current Weight" value={`${currentWeight} lbs`} />
          <Stat label="Goal Weight" value={`${goalWeight} lbs`} />
          <Stat label="Progress" value={`${lostSoFar} lbs`} />
          <Stat label="A1C" value={`${a1cCurrent}`} />
          <Stat label="A1C Goal" value={`<${a1cGoal}`} />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm text-muted">Weight progress ({currentWeight} → {goalWeight})</p>
            <ProgressBar value={weightProgress} color="var(--presidio)" />
          </div>
          <div>
            <p className="mb-2 text-sm text-muted">A1C improvement progress</p>
            <ProgressBar value={a1cProgress} color="var(--presidio)" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="2) Key Conditions Status">
          <Condition name="Type 2 Diabetes" status="A1C 7.2" focus="Glucose stability, carb timing, post-meal walks" />
          <Condition name="Low Testosterone" status="On TRT" focus="Adherence, sleep quality, resistance training" />
          <Condition name="Menière's Disease" status="No hearing R ear, tinnitus" focus="Sodium control, vestibular work, trigger logging" />
          <Condition name="Pancreatitis History" status="Monitor nutrition quality" focus="Low-fat meals, alcohol avoidance, symptom watch" />
          <Condition name="Stress / Insomnia" status="Active management" focus="9 PM wind-down, breathwork, evening downshift" />
        </Card>

        <Card title="3) Daily Metrics Tracker">
          <MetricsGrid>
            <Input label="Fasting glucose" unit="mg/dL" value={metrics.fastingGlucose} onChange={(v) => setMetrics({ ...metrics, fastingGlucose: v })} />
            <Input label="Post-meal #1" unit="mg/dL" value={metrics.postMeal1} onChange={(v) => setMetrics({ ...metrics, postMeal1: v })} />
            <Input label="Post-meal #2" unit="mg/dL" value={metrics.postMeal2} onChange={(v) => setMetrics({ ...metrics, postMeal2: v })} />
            <Input label="Weight today" unit="lbs" value={metrics.weightToday} onChange={(v) => setMetrics({ ...metrics, weightToday: v })} />
            <Input label="Water" unit="oz" value={metrics.waterOz} onChange={(v) => setMetrics({ ...metrics, waterOz: v })} />
            <Input label="Sodium" unit="mg" value={metrics.sodiumMg} onChange={(v) => setMetrics({ ...metrics, sodiumMg: v })} />
            <Input label="Sleep quality" unit="1-10" value={metrics.sleepQuality} onChange={(v) => setMetrics({ ...metrics, sleepQuality: v })} />
            <Input label="Sleep hours" unit="hrs" value={metrics.sleepHours} onChange={(v) => setMetrics({ ...metrics, sleepHours: v })} />
            <Input label="Stress AM" unit="1-10" value={metrics.stressAm} onChange={(v) => setMetrics({ ...metrics, stressAm: v })} />
            <Input label="Stress PM" unit="1-10" value={metrics.stressPm} onChange={(v) => setMetrics({ ...metrics, stressPm: v })} />
            <Input label="Tinnitus AM" unit="1-10" value={metrics.tinnitusAm} onChange={(v) => setMetrics({ ...metrics, tinnitusAm: v })} />
            <Input label="Tinnitus PM" unit="1-10" value={metrics.tinnitusPm} onChange={(v) => setMetrics({ ...metrics, tinnitusPm: v })} />
          </MetricsGrid>
          <div className="mt-3 rounded-lg border border-border bg-[#111111] p-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={metrics.exerciseDone} onChange={(e) => setMetrics({ ...metrics, exerciseDone: e.target.checked })} />
              Exercise completed
            </label>
            <input
              className="mt-2 w-full rounded-md border border-border bg-[#0d0d0d] px-3 py-2 text-sm"
              placeholder="Exercise type"
              value={metrics.exerciseType}
              onChange={(e) => setMetrics({ ...metrics, exerciseType: e.target.value })}
            />
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="4) Nutrition Overview">
          <ul className="space-y-2 text-sm text-muted">
            <li>Protein: <span className="text-white">130-150g</span></li>
            <li>Carbs: <span className="text-white">100-130g</span></li>
            <li>Fat: <span className="text-white">&lt;30g</span></li>
            <li>Sodium: <span className="text-white">&lt;1,500mg</span></li>
          </ul>
          <div className="mt-4 space-y-3">
            <p className="text-sm">Today is a <span className="font-semibold text-[#34d399]">{isIFDay ? 'Intermittent Fasting day' : 'Regular meal day'}</span>.</p>
            <p className="text-sm text-muted">Meal plan: high-protein breakfast, lean lunch bowl, low-fat dinner, no late-night snacking.</p>
            <div>
              <p className="mb-1 text-xs text-muted">Hydration ({metrics.waterOz || 0}/100 oz)</p>
              <ProgressBar value={hydrationProgress} color="var(--presidio)" />
            </div>
            <div>
              <p className="mb-1 text-xs text-muted">Sodium ({metrics.sodiumMg || 0}/1500 mg)</p>
              <ProgressBar value={sodiumProgress} color={sodiumProgress > 100 ? '#ef4444' : 'var(--presidio)'} />
            </div>
          </div>
        </Card>

        <Card title="5) Workout Schedule">
          <p className="text-sm"><span className="text-muted">Today ({dayName}):</span> <span className="font-semibold text-white">{todayWorkout.title}</span></p>
          {todayWorkout.totalGym && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              {todayWorkout.totalGym.map((exercise) => (
                <li key={exercise}>{exercise}</li>
              ))}
            </ul>
          )}
          <p className="mt-2 text-sm text-muted">Recovery: {todayWorkout.recovery}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {weeklySchedule.map((day) => (
              <div key={day} className={`rounded-lg border p-2 text-xs ${day === dayName ? 'border-[#34d399] bg-[#0d1a14]' : 'border-border bg-[#111111]'}`}>
                <p className="font-medium text-white">{day.slice(0, 3)}</p>
                <p className="text-muted">{workoutsByDay[day].title}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="6) Sleep & Stress Management">
          <p className="text-sm text-white">9:00 PM wind-down ritual</p>
          <p className="text-sm text-muted">Tonight: reduce screens, low lights, slow breathing, prep for 7+ hours sleep.</p>
          <p className="mt-3 text-sm text-muted">Stress techniques: 5-min box breathing, short walk, gratitude reset, body scan.</p>
          <div className="mt-3 space-y-2">
            {Object.keys(metrics.windDown).map((item) => (
              <Check
                key={item}
                label={item}
                checked={metrics.windDown[item]}
                onChange={(checked) => setMetrics({ ...metrics, windDown: { ...metrics.windDown, [item]: checked } })}
              />
            ))}
          </div>
        </Card>

        <Card title="7) Menière's Management">
          <p className="text-sm text-muted">Daily sodium target: <span className="text-white">&lt;1,500mg</span></p>
          <p className="text-sm text-muted">Vestibular exercises: <span className="text-white">10-15 min daily</span></p>
          <p className="text-sm text-muted">Track tinnitus intensity (AM/PM) in Daily Metrics.</p>
          <textarea
            className="mt-3 min-h-[80px] w-full rounded-md border border-border bg-[#0d0d0d] p-3 text-sm"
            placeholder="Trigger tracking (sleep loss, high sodium meal, dehydration, stress spikes...)"
            value={metrics.meniereTriggers}
            onChange={(e) => setMetrics({ ...metrics, meniereTriggers: e.target.value })}
          />
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="8) Supplementation">
          <div className="space-y-2">
            {supplementSchedule.map((s) => (
              <label key={s.name} className="flex items-center justify-between rounded-md border border-border bg-[#111111] p-2 text-sm">
                <span>{s.name} <span className="text-muted">({s.time})</span></span>
                <input
                  type="checkbox"
                  checked={metrics.supplements[s.name]}
                  onChange={(e) => setMetrics({ ...metrics, supplements: { ...metrics.supplements, [s.name]: e.target.checked } })}
                />
              </label>
            ))}
          </div>
        </Card>

        <Card title="9) Spiritual Practice Daily">
          <p className="mb-2 text-sm text-muted">Chakra focus this week: <span className="text-white">Heart Chakra (compassion, gratitude, openness)</span></p>
          <div className="space-y-2">
            {spiritualItems.map((item) => (
              <Check
                key={item}
                label={item}
                checked={metrics.spiritual[item]}
                onChange={(checked) => setMetrics({ ...metrics, spiritual: { ...metrics.spiritual, [item]: checked } })}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">Checklist completion: {checklistCompletion}%</p>
        </Card>
      </section>

      {isSunday && (
        <section className="card rounded-xl border-[#34d399] p-5">
          <h2 className="text-lg font-semibold text-[#34d399]">10) Weekly Check-In Reminder (Sunday)</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>Review glucose trends (fasting + post-meal)</li>
            <li>Calculate weight average for the week</li>
            <li>Confirm completed workouts</li>
            <li>Review Menière&apos;s episodes and trigger patterns</li>
            <li>Rate weekly sleep quality and stress load</li>
            <li>Review spiritual consistency</li>
          </ul>
        </section>
      )}

      <section className="grid gap-4 lg:grid-cols-2">
        <Card title="11) Monthly Progress">
          <p className="text-sm text-muted">Current month: <span className="text-white">{monthName}</span></p>
          <p className="text-sm text-muted">Weight target for month: <span className="text-white">{monthWeightTarget} lbs</span></p>
          <p className="text-sm text-muted">Estimated A1C: <span className="text-white">{estimatedA1c}</span></p>
          <p className="text-sm text-muted">Focus areas: glucose control, sodium compliance, consistent sleep, workout adherence.</p>
          <div className="mt-3">
            <p className="mb-1 text-xs text-muted">Progress toward monthly weight target</p>
            <ProgressBar value={monthlyProgress} color="var(--presidio)" />
          </div>
        </Card>

        <Card title="12) 90-Day Roadmap">
          <p className="text-sm text-muted">Day {daysElapsed} of 90</p>
          <p className="text-sm">Current phase: <span className="font-semibold text-[#34d399]">{roadmap.phase}</span></p>
          <p className="mt-1 text-sm text-muted">Active now: sleep routine lock-in, nutrition consistency, glucose monitoring, progressive strength training.</p>
          <p className="text-sm text-muted">Next phase preview: <span className="text-white">{roadmap.next}</span></p>
          <div className="mt-3">
            <ProgressBar value={Math.min(100, (daysElapsed / 90) * 100)} color="var(--presidio)" />
          </div>
        </Card>
      </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card rounded-xl p-5">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-[#111111] p-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function Condition({ name, status, focus }: { name: string; status: string; focus: string }) {
  return (
    <div className="mb-2 rounded-lg border border-border bg-[#111111] p-3">
      <p className="text-sm font-medium text-white">{name}</p>
      <p className="text-xs text-muted">Status: {status}</p>
      <p className="text-xs text-muted">Focus: {focus}</p>
    </div>
  );
}

function MetricsGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-2 sm:grid-cols-2">{children}</div>;
}

function Input({ label, unit, value, onChange }: { label: string; unit: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="rounded-md border border-border bg-[#111111] p-2 text-xs text-muted">
      <span>{label}</span>
      <div className="mt-1 flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-border bg-[#0d0d0d] px-2 py-1 text-sm text-white"
        />
        <span>{unit}</span>
      </div>
    </label>
  );
}

function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 rounded-md border border-border bg-[#111111] px-3 py-2 text-sm">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}
