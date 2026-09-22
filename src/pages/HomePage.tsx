import { Link } from 'react-router-dom';
import { ReactOrbit } from '../components/ReactOrbit';
import { SectionHeading } from '../components/SectionHeading';
import { members, slides } from '../data/presentation';

export function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow">SEMINÁRIO · FRAMEWORKS FRONT-END</span><h1>React transforma <em>estado</em> em interface.</h1><p>Pesquisa, comparação e demonstração prática em uma aplicação Web criada pela turma 2º ADS.</p><div className="actions"><Link className="primary" to="/slides">Abrir apresentação</Link><Link className="secondary" to="/demo">Testar aplicação</Link></div></div>
      <ReactOrbit />
    </section>
    <section className="section light">
      <SectionHeading eyebrow="EM UMA FRASE" title="Uma biblioteca para interfaces componentizadas" text="React organiza a camada de apresentação com componentes, props, estado e renderização declarativa." />
      <div className="metric-row"><article><strong>2013</strong><span>lançamento público</span></article><article><strong>19.3</strong><span>versão usada</span></article><article><strong>15</strong><span>tópicos pesquisados</span></article><article><strong>8</strong><span>integrantes</span></article></div>
    </section>
    <section className="section dark">
      <SectionHeading eyebrow="COMO FUNCIONA" title="Interação → estado → nova interface" text="O fluxo unidirecional reduz ambiguidades: eventos pedem uma mudança, o estado é atualizado e os componentes descrevem o próximo resultado." />
      <div className="flow"><span>Interação</span><b>→</b><span>Evento</span><b>→</b><span>Estado</span><b>→</b><span>Reconciliação</span><b>→</b><span>DOM</span></div>
    </section>
    <section className="section light">
      <SectionHeading eyebrow="DECISÃO TÉCNICA" title="Quando React é uma boa escolha" />
      <div className="split"><div><h3>Recomendamos</h3><ul><li>Interfaces com estados frequentes</li><li>SPAs, painéis e sistemas internos</li><li>Design systems e componentes reutilizáveis</li><li>Evolução gradual de uma interface existente</li></ul></div><div><h3>Outra solução pode ser melhor</h3><ul><li>HTML/CSS para páginas simples e estáticas</li><li>Framework React em projetos full stack</li><li>React Native em aplicações móveis</li><li>Soluções mais opinativas para equipes que querem menos decisões</li></ul></div></div>
    </section>
    <section className="section dark compact-section">
      <SectionHeading eyebrow="PROJETO DA EQUIPE" title="ReactLab: o conteúdo e a prática no mesmo produto" text="Esta página, os slides HTML e o quadro de tarefas usam React de verdade. A demonstração inclui componentes, rotas, Context, useReducer, useEffect e persistência local." />
      <div className="route-map"><span>#/</span><span>#/slides</span><span>#/demo</span><span>#/referencias</span></div>
    </section>
    <section className="section light">
      <SectionHeading eyebrow="ROTEIRO COMPLETO" title="15 tópicos, sem ultrapassar o limite" />
      <ol className="topic-grid">{slides.map((slide, index) => <li key={slide.title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{slide.title}</strong></li>)}</ol>
    </section>
    <section className="section team">
      <SectionHeading eyebrow="EQUIPE" title="Participação dividida por conteúdo" />
      <div className="team-list">{members.map((member, index) => <span key={member}><b>{index + 1}</b>{member}</span>)}</div>
    </section>
  </>;
}
