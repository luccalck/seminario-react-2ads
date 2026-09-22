import type { Slide } from '../types';

export const members = [
  'João Gabriel', 'João Pedro Fonseca', 'Lucas Souza', 'Miguel Oliveira',
  'Davi Souza', 'Lucca Castilho', 'Pedro de Lima', 'Renan Ramos',
];

export const references = [
  ['React — Quick Start', 'https://react.dev/learn'],
  ['React — Versions', 'https://react.dev/versions'],
  ['React 19.3', 'https://react.dev/blog/2026/09/09/react-19-3'],
  ['React Foundation', 'https://react.dev/blog/2026/02/24/the-react-foundation'],
  ['Build a React app from Scratch', 'https://react.dev/learn/build-a-react-app-from-scratch'],
  ['Vite — Getting Started', 'https://vite.dev/guide/'],
  ['React Hooks', 'https://react.dev/reference/react/hooks'],
  ['CVE-2025-55182', 'https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components'],
  ['Meta — React Foundation', 'https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/'],
  ['GitHub Pages', 'https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site'],
  ['React Router — HashRouter', 'https://reactrouter.com/api/declarative-routers/HashRouter'],
] as const;

export const slides: Slide[] = [
  { kicker: 'FRAMEWORKS FRONT-END · 2º ADS', title: 'React', statement: 'Interfaces Web baseadas em componentes.', bullets: ['Pesquisa técnica', 'Aplicação funcional', 'Demonstração ao vivo'] },
  { kicker: '01 · DEFINIÇÃO', title: 'Uma biblioteca para construir interfaces', statement: 'React descreve a interface como função do estado.', bullets: ['JavaScript de código aberto', 'Componentes reutilizáveis', 'Camada de apresentação', 'Renderização declarativa'], source: 'react.dev/learn' },
  { kicker: '02 · EVOLUÇÃO', title: 'De 2013 à React Foundation', statement: 'Criado por Jordan Walke no Facebook; hoje pertence à React Foundation e é mantido com a comunidade.', bullets: ['2013 · lançamento público', '2017 · Fiber', '2019 · Hooks', '2022 · React 18', '2024 · React 19', '2026 · Foundation + 19.3'], source: 'react.dev/versions · react.dev/blog/2026/02/24' },
  { kicker: '03 · DECISÃO', title: 'React faz sentido quando a interface muda muito', statement: 'Complexidade de estado e reutilização justificam a biblioteca.', bullets: ['SPAs e painéis', 'Design systems', 'Fluxos interativos', 'Adoção gradual', 'HTML/CSS basta em páginas simples', 'Framework React integra melhor projetos full stack'], source: 'react.dev/learn/creating-a-react-app' },
  { kicker: '04 · ARQUITETURA', title: 'Estado entra. Interface reage.', statement: 'Eventos atualizam o estado; React reconcilia a árvore e confirma mudanças no DOM.', bullets: ['Componentes + JSX', 'Props: entrada', 'State: memória', 'Hooks: lógica', 'Context: compartilhamento', 'React DOM + Router + Vite'] },
  { kicker: '05 · PRÉ-REQUISITOS', title: 'React amplia uma base Web sólida', statement: 'JSX não substitui HTML, CSS ou JavaScript: ele os conecta.', bullets: ['HTML semântico', 'CSS responsivo', 'JavaScript moderno', 'Node.js e npm', 'HTTP e APIs', 'TypeScript, Git e rotas'] },
  { kicker: '06 · INSTALAÇÃO', title: 'Primeiro projeto com Vite', statement: 'Ferramenta atual, rápida e adequada a uma aplicação client-side.', bullets: ['Node.js 20.19+ ou 22.12+', 'React 19.3.0', 'Vite 8.3.0', 'React Router 7.18.4'], code: 'npm create vite@latest react-seminario -- --template react-ts\ncd react-seminario\nnpm install\nnpm run dev', source: 'vite.dev/guide · react.dev/learn/build-a-react-app-from-scratch' },
  { kicker: '07 · ESTRUTURA', title: 'Responsabilidades separadas por arquivo', statement: 'Entrada, rotas, páginas, estado e componentes permanecem fáceis de localizar.', bullets: ['src/main.tsx · raiz React', 'src/App.tsx · rotas e layout', 'src/pages · telas', 'src/components · peças reutilizáveis', 'src/context · estado compartilhado', 'src/data · conteúdo e fontes'] },
  { kicker: '08 · RECURSOS', title: 'Componentes pequenos, estado previsível', statement: 'Props levam dados; eventos disparam ações; effects sincronizam sistemas externos.', bullets: ['Componentes + props', 'JSX condicional', 'useReducer', 'useEffect', 'Context', 'Listas com key'], code: 'const [tasks, dispatch] = useReducer(reducer, initial);\n\nuseEffect(() => {\n  localStorage.setItem("tasks", JSON.stringify(tasks));\n}, [tasks]);', source: 'react.dev/reference/react/hooks' },
  { kicker: '09 · ANÁLISE', title: 'Produtividade com escolhas arquiteturais', statement: 'React organiza interfaces complexas, mas não entrega uma arquitetura completa sozinho.', bullets: ['+ Reuso e composição', '+ Ecossistema amplo', '+ Adoção gradual', '− Muitas decisões externas', '− Estado e effects exigem disciplina', '− Desempenho deve ser medido'] },
  { kicker: '10 · MERCADO', title: 'Um ecossistema em escala global', statement: 'A Meta relata uso em mais de 50 milhões de sites e produtos.', bullets: ['Facebook.com', 'Microsoft', 'Shopify', 'Bloomberg', 'Discord', 'Coinbase'], source: 'engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation' },
  { kicker: '11 · SEGURANÇA', title: 'CVE-2025-55182 exige atualização imediata', statement: 'Execução remota não autenticada em React Server Components. CVSS 10.0.', bullets: ['Afetadas: 19.0.0, 19.1.0, 19.1.1 e 19.2.0', 'Pacotes react-server-dom-*', 'Correções iniciais: 19.0.1, 19.1.2 e 19.2.1', 'Atualizar para a última versão suportada e refazer o build', 'Este Vite client-side, sem RSC, não é afetado diretamente'], source: 'react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components' },
  { kicker: '12 · PROJETO', title: 'ReactLab une conteúdo e prática', statement: 'A mesma aplicação publica o seminário e demonstra estado, efeitos e rotas.', bullets: ['Página pública do seminário', 'Deck HTML com teclado', 'Quadro de tarefas', 'Persistência em localStorage', 'HashRouter no GitHub Pages', 'Layout responsivo'] },
  { kicker: '13 · DEMONSTRAÇÃO', title: 'Da instalação à interação em 3 minutos', statement: 'O público vê o código provocar uma mudança real e persistente.', bullets: ['npm ci + npm run dev', 'Criar e concluir tarefa', 'Filtrar resultados', 'Recarregar e confirmar persistência', 'Abrir componente e reducer', 'npm run build'] },
  { kicker: '14 · CONCLUSÃO', title: 'React é uma escolha, não um padrão automático', statement: 'Recomendamos para interfaces interativas e evolutivas; não para toda página Web.', bullets: ['Componentes reduzem repetição', 'Estado torna mudanças previsíveis', 'Vite simplifica o projeto client-side', 'Framework React pode ser melhor no full stack', 'Domínio técnico inclui segurança e manutenção'], source: 'react.dev · vite.dev · docs.github.com' },
];
