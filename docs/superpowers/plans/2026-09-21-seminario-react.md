# Seminário React Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar um seminário React completo com aplicação Web funcional, apresentação HTML, PPTX de 15 slides, README e GitHub Pages público.

**Architecture:** Um único projeto React 19.3 + TypeScript + Vite concentra o conteúdo do seminário, o deck HTML e uma demonstração de tarefas persistida em `localStorage`. O mesmo roteiro de 15 tópicos orienta a aplicação e o PPTX, evitando divergências. O GitHub Actions compila `dist` e publica no Pages.

**Tech Stack:** React 19.3, TypeScript, Vite 8, React Router, Vitest, Testing Library, PptxGenJS, GitHub Actions.

---

### Task 1: Estrutura e dados compartilhados

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`
- Create: `src/data/presentation.ts`, `src/types.ts`

- [ ] Criar a configuração Vite/TypeScript com rotas por hash e base relativa.
- [ ] Registrar os oito integrantes, 15 tópicos, fontes e metadados em `presentation.ts`.
- [ ] Instalar dependências com `npm install` e validar versões com `npm list --depth=0`.

### Task 2: Aplicação React e demonstração funcional

**Files:**
- Create: `src/main.tsx`, `src/App.tsx`, `src/styles.css`
- Create: `src/pages/HomePage.tsx`, `src/pages/SlidesPage.tsx`, `src/pages/DemoPage.tsx`, `src/pages/ReferencesPage.tsx`
- Create: `src/components/*`, `src/context/TaskContext.tsx`, `src/context/taskReducer.ts`
- Test: `src/context/taskReducer.test.ts`

- [ ] Implementar layout responsivo, navegação e página pública com os tópicos essenciais.
- [ ] Implementar deck HTML com 15 slides, teclado, indicador de progresso e modo tela cheia.
- [ ] Implementar quadro de tarefas com adicionar, concluir, filtrar, remover e persistir.
- [ ] Escrever testes do reducer e executar `npm test -- --run` esperando todos os testes aprovados.
- [ ] Executar `npm run build` esperando geração limpa de `dist`.

### Task 3: Documentação e publicação

**Files:**
- Create: `README.md`, `.gitignore`, `.github/workflows/deploy.yml`
- Create: `docs/ROTEIRO_DE_FALA.md`

- [ ] Documentar objetivo, equipe, versões, pré-requisitos, instalação, execução, estrutura, recursos, vulnerabilidade, evidências, Pages e referências.
- [ ] Criar workflow oficial do GitHub Pages com build Vite e publicação de `dist`.
- [ ] Criar roteiro de fala equilibrado entre os oito integrantes.

### Task 4: PowerPoint e evidências

**Files:**
- Create: `tools/generate-pptx.cjs`
- Create: `ENTREGAVEIS/Seminario_React_2ADS.pptx`
- Create: `evidencias/*.png`

- [ ] Gerar exatamente 15 slides em 16:9, seguindo o estilo editorial grafite/ciano e incluindo fontes por slide.
- [ ] Renderizar o PPTX para PNG e executar os validadores `slides_test.py` e `slides_test.py`.
- [ ] Corrigir qualquer sobreposição, vazamento ou inconsistência visual encontrada.
- [ ] Capturar a aplicação real em desktop, mobile, slides e demo para o README.

### Task 5: Auditoria, empacotamento e GitHub

**Files:**
- Create: `ENTREGAVEIS/Projeto_ReactLab.zip`
- Create: `ENTREGAVEIS/INSTRUCOES_DE_ENTREGA.txt`

- [ ] Auditar os 15 requisitos dos slides, os 12 itens do README, o footer com oito nomes e a demonstração com ao menos dois recursos React.
- [ ] Criar ZIP sem `node_modules`, `dist`, cache ou arquivos temporários.
- [ ] Inicializar Git, criar repositório público `seminario-react-2ads`, enviar `main` e habilitar Pages por GitHub Actions.
- [ ] Validar a URL pública, o workflow, o PPTX e o ZIP; registrar os links finais em README e instruções.

