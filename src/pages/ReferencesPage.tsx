import { references } from '../data/presentation';
import { SectionHeading } from '../components/SectionHeading';

export function ReferencesPage() {
  return <section className="references-page"><SectionHeading eyebrow="FONTES PRIMÁRIAS" title="Documentação e publicações oficiais" text="As fontes sustentam definição, versões, configuração, adoção, segurança e publicação." /><div className="reference-list">{references.map(([label, url], index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{label}</strong><small>{url}</small></div><b>↗</b></a>)}</div></section>;
}
