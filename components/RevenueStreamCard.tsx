import ProgressBar from "./ProgressBar";

type RevenueStreamCardProps = {
  name: string;
  current: number;
  target: number;
  metrics: string[];
  actions: string[];
  color: string;
};

export default function RevenueStreamCard({ name, current, target, metrics, actions, color }: RevenueStreamCardProps) {
  const progress = (current / target) * 100;
  return (
    <div className="card interactive rounded-xl p-5 hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm text-muted">${current} / ${target}</span>
      </div>
      <div className="mt-3">
        <ProgressBar value={progress} color={color} />
      </div>
      <div className="mt-4 space-y-1 text-sm text-muted">
        {metrics.map((metric) => (
          <p key={metric}>• {metric}</p>
        ))}
      </div>
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-xs uppercase tracking-wide text-muted">Action Items</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-300">
          {actions.map((action) => (
            <li key={action}>→ {action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
