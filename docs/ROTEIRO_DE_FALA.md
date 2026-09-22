# Roteiro de fala

Tempo estimado: 16 a 18 minutos. A demonstração deve ser ensaiada com a mesma máquina usada na apresentação.

## João Gabriel — slides 1 a 3

Faça a abertura, apresente os integrantes e defina React como uma biblioteca para interfaces, não como um framework full stack. Explique que componentes descrevem a tela a partir do estado e percorra os principais marcos de 2013 até a React Foundation.

## Lucca Castilho — slides 4 e 5

Explique quando React faz sentido e quando HTML e CSS ou um framework full stack são alternativas melhores. Em seguida, apresente o fluxo interação, evento, estado, reconciliação e DOM.

## Miguel Oliveira — slides 6 e 7

Apresente os pré-requisitos, com destaque para HTML semântico, CSS responsivo, JavaScript moderno, Node.js e npm. Mostre os comandos para criar e executar o projeto com Vite.

## Lucas Souza — slides 8 e 9

Mostre `main.tsx`, `App.tsx`, `pages`, `components`, `context` e a responsabilidade de cada parte. Depois apresente o trecho com `useReducer` e `useEffect`, explicando estado compartilhado e persistência.

## Davi Souza — slides 10 e 11

Compare forças e limitações sem afirmar que React resolve arquitetura, desempenho ou backend sozinho. Apresente a React Foundation e seus oito membros fundadores como evidência de um ecossistema mantido por várias empresas.

## João Pedro Fonseca — slides 12 e 13

Apresente a vulnerabilidade CVE-2025-55182, as versões afetadas e a atualização recomendada. Deixe claro que o projeto Vite somente cliente não usa React Server Components. Depois apresente as rotas e os recursos do ReactLab.

## Renan Ramos — slide 14

Faça a demonstração prática. No terminal, execute `npm ci` e `npm run dev`. Abra a aplicação no navegador, crie uma tarefa, conclua, filtre, remova e recarregue a página para confirmar a persistência. Mostre no código pelo menos `TaskContext.tsx` e `TaskBoard.tsx`, identificando componentes, Context, `useReducer` e `useEffect`. Finalize com `npm run build`.

## Pedro de Lima — slide 15

Feche com a recomendação técnica, retome os resultados da demonstração e indique as fontes oficiais.

## Plano de contingência

Se a rede falhar, use `npm run dev` e a aplicação local. Se o projetor cortar contraste, use a apresentação HTML em tela cheia e aumente o zoom do navegador. Não dependa do GitHub Pages para a demonstração ao vivo.
