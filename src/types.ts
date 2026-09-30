export type Slide = {
  kicker: string;
  title: string;
  statement: string;
  bullets: string[];
  source?: string;
  code?: string;
};

export type Task = { id: string; title: string; done: boolean };
export type Filter = 'all' | 'pending' | 'done';
export type TaskAction =
  | { type: 'add'; title: string }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string }
  | { type: 'restore'; tasks: Task[] };
