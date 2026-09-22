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
    <section className="section dark">
      <SectionHeading eyebrow="EVOLUÇÃO" title="Treze anos de mudanças arquiteturais" text="Do lançamento aberto à fundação independente, os marcos mantiveram o foco em componentes e melhoraram a forma de renderizar e compartilhar lógica." />
      <div className="timeline-web">{[['2013','Jordan Walke · Facebook'],['2017','Fiber'],['2019','Hooks'],['2022','React 18'],['2024','React 19'],['2026','React Foundation · 19.3']].map(([year,label]) => <span key={year}><b>{year}</b><small>{label}</small></span>)}</div>
    </section>
    <section className="section light install-web">
      <SectionHeading eyebrow="INSTALAÇÃO" title="Um projeto React atual começa com Vite" text="Node.js 20.19+ ou 22.12+, React 19.3.0, Vite 8.3.0 e React Router 7.18.4." />
      <pre><code>npm create vite@latest react-seminario -- --template react-ts{`\n`}cd react-seminario{`\n`}npm install{`\n`}npm run dev</code></pre>
    </section>
    <section className="section security-web">
      <div><span className="risk-score">10.0</span><small>CVSS · CRÍTICA</small></div>
      <SectionHeading eyebrow="SEGURANÇA" title="CVE-2025-55182" text="A falha permite execução remota em versões específicas de React Server Components. A correção exige atualizar os pacotes react-server-dom-* e o framework aplicável. Este projeto Vite somente cliente não usa RSC e não é diretamente afetado." />
    </section>
    <section className="section light">
      <SectionHeading eyebrow="DO CÓDIGO AO MERCADO" title="Estrutura, recursos e limites em uma visão" text="O projeto separa rotas, páginas, componentes, estado e conteúdo. A demonstração conecta essas partes sem esconder os custos arquiteturais." />
      <div className="essentials-grid">
        <article><span>ESTRUTURA</span><h3>Arquivos com função clara</h3><p><code>main.tsx</code> cria a raiz; <code>App.tsx</code> organiza rotas; páginas compõem telas; componentes reutilizam interface; Context e reducer coordenam estado.</p></article>
        <article><span>RECURSOS</span><h3>React usado de verdade</h3><p>Componentes, props, JSX condicional, listas com <code>key</code>, Context, <code>useReducer</code>, <code>useEffect</code> e HashRouter.</p></article>
        <article><span>ADOÇÃO E LIMITES</span><h3>Escala não elimina escolhas</h3><p>Meta, Microsoft, Shopify, Bloomberg, Discord e Coinbase participam do ecossistema. React amplia reuso, mas não fornece sozinho backend, dados ou arquitetura full stack.</p></article>
      </div>
    </section>
    <section className="section dark compact-section">
      <SectionHeading eyebrow="PROJETO DA EQUIPE" title="ReactLab: o conteúdo e a prática no mesmo produto" text="Esta página, os slides HTML e o quadro de tarefas usam React de verdade. A demonstração inclui componentes, rotas, Context, useReducer, useEffect e persistência local." />
      <div className="route-map"><span>#/</span><span>#/slides</span><span>#/demo</span><span>#/referencias</span></div>
      <div className="demo-path"><b>DEMO</b><span>npm run dev</span><i>→</i><span>criar tarefa</span><i>→</i><span>filtrar</span><i>→</i><span>recarregar</span><i>→</i><span>npm run build</span></div>
    </section>
    <section className="section light">
      <SectionHeading eyebrow="ROTEIRO COMPLETO" title="15 tópicos, sem ultrapassar o limite" />
      <ol className="topic-grid">{slides.map((slide, index) => <li key={slide.title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{slide.title}</strong></li>)}</ol>
    </section>
    <section className="section team">
      <SectionHeading eyebrow="EQUIPE" title="Participação dividida por conteúdo" />
      <div className="team-list">{members.map((member, index) => <span key={member}><b>{index + 1}</b>{member}</span>)}</div>
      <div className="actions final-actions"><Link className="primary" to="/referencias">Consultar fontes oficiais</Link><a className="secondary" href="https://github.com/luccalck/seminario-react-2ads" target="_blank" rel="noreferrer">Abrir repositório</a></div>
    </section>
  </>;
}
