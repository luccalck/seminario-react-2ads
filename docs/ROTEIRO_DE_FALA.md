# Roteiro de fala

Tempo estimado: 16 a 18 minutos. A demonstração deve ser ensaiada com a mesma máquina usada na apresentação.

## Lucca Castilho — slides 1 e 2

Apresente o tema e a classificação correta: React é uma biblioteca de interface, não um framework full stack. Explique que componentes descrevem a tela a partir do estado.

## João Gabriel — slides 3 e 4

Explique que Jordan Walke criou React no Facebook, que o projeto foi aberto em 2013 e que hoje pertence à React Foundation, com manutenção da fundação e da comunidade. Percorra Fiber, Hooks, React 18, React 19 e a versão 19.3. Depois compare React com HTML/CSS em páginas simples e com frameworks React em aplicações full stack.

## João Pedro Fonseca — slides 5 e 6

Explique o fluxo interação, evento, estado, reconciliação e DOM. Relacione os pré-requisitos a esse fluxo, destacando JavaScript moderno e HTML semântico.

## Lucas Souza — slides 7 e 8

Execute ou explique os comandos do Vite. Mostre `main.tsx`, `App.tsx`, `pages`, `components`, `context` e a responsabilidade de cada parte.

## Miguel Oliveira — slides 9 e 10

Mostre o trecho com `useReducer` e `useEffect`. Explique que o reducer calcula o próximo estado sem mutação e que o effect sincroniza o estado com `localStorage`. Compare forças e limitações sem afirmar que React resolve arquitetura, desempenho ou backend sozinho.

## Davi Souza — slides 11 e 12

Apresente a adoção e a vulnerabilidade CVE-2025-55182. Cite as versões afetadas, o risco de execução remota e as correções iniciais, recomendando a última versão suportada. Deixe claro que o escopo é React Server Components e que a aplicação Vite somente cliente não é afetada diretamente.

## Pedro de Lima — slides 13 e 14

Apresente o ReactLab, suas quatro rotas e o fluxo do quadro de tarefas. Na demonstração, crie uma tarefa, conclua e filtre.

## Renan Ramos — slide 15

Feche com a recomendação técnica e indique as fontes oficiais. Se houver tempo, retome o resultado do build e a persistência demonstrada no slide anterior.

## Plano de contingência

Se a rede falhar, use `npm run dev` e a aplicação local. Se o projetor cortar contraste, use a apresentação HTML em tela cheia e aumente o zoom do navegador. Não dependa do GitHub Pages para a demonstração ao vivo.
