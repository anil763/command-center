import BrainWorkspace from '@/components/BrainWorkspace';

export default function MemoryPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Memory Bank</h2>
      <p className="text-sm text-muted">Live document explorer with automatic updates.</p>
      <BrainWorkspace mode="memory" />
    </div>
  );
}
