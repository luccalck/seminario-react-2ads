export function ReactOrbit({ compact = false }: { compact?: boolean }) {
  return <div className={`react-orbit ${compact ? 'compact' : ''}`} aria-hidden="true">
    <i /><i /><i /><b />
  </div>;
}
