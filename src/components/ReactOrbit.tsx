// Ilustração do átomo feita com elementos estilizados em CSS, sem imagem externa.
// compact ajusta seu tamanho quando o mesmo componente é usado em outro contexto.
export function ReactOrbit({ compact = false }: { compact?: boolean }) {
  return <div className={`react-orbit ${compact ? 'compact' : ''}`} aria-hidden="true">
    <i /><i /><i /><b />
  </div>;
}
