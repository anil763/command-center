type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="card interactive rounded-xl p-4 hover:-translate-y-0.5">
      <p className="text-sm text-muted">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      {subtitle ? <p className="mt-1 text-xs text-muted">{subtitle}</p> : null}
    </div>
  );
}
