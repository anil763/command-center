import BrainWorkspace from '@/components/BrainWorkspace';

export default function BrainPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Second Brain</h2>
      <BrainWorkspace mode="brain" />
    </div>
  );
}
