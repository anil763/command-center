type ProgressBarProps = {
  value: number;
  color?: string;
  showLabel?: boolean;
};

export default function ProgressBar({ value, color = "var(--revenue)", showLabel = true }: ProgressBarProps) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      <div className="h-2 w-full rounded-full bg-[#1b1b1b] border border-border overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${safe}%`, background: color }} />
      </div>
      {showLabel && <p className="mt-1 text-xs text-muted">{safe.toFixed(1)}%</p>}
    </div>
  );
}
