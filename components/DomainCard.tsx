type DomainCardProps = {
  title: string;
  color: string;
  points: string[];
};

export default function DomainCard({ title, color, points }: DomainCardProps) {
  return (
    <div className="card rounded-xl p-5" style={{ borderColor: color }}>
      <h3 className="text-lg font-semibold" style={{ color }}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-gray-300">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
