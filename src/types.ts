// Estrutura dos dados de cada slide HTML; code e source são opcionais.
export type Slide = {
  kicker: string;
  title: string;
  statement: string;
  bullets: string[];
  source?: string;
  code?: string;
};

// Uma tarefa tem identificador estável, texto e estado de conclusão.
export type Task = { id: string; title: string; done: boolean };
// O filtro controla qual parte da lista será mostrada, sem alterar a lista original.
export type Filter = 'all' | 'pending' | 'done';
// Ações aceitas pelo reducer. Cada variante informa os dados necessários à operação.
export type TaskAction =
  | { type: 'add'; title: string }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string }
  | { type: 'restore'; tasks: Task[] };
