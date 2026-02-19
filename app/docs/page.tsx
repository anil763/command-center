import BrainWorkspace from '@/components/BrainWorkspace';

export default function DocsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Browse Documents</h2>
      <p className="text-sm text-muted">Search and browse markdown files from /workspace/brain.</p>
      <BrainWorkspace mode="docs" />
    </div>
  );
}
