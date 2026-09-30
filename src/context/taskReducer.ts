import type { Task, TaskAction } from '../types';

export const initialTasks: Task[] = [
  { id: 'arquitetura', title: 'Revisar arquitetura de componentes', done: true },
  { id: 'seguranca', title: 'Validar dependências e segurança', done: false },
  { id: 'demo', title: 'Ensaiar demonstração prática', done: false },
];

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'add':
      return [...tasks, { id: crypto.randomUUID(), title: action.title.trim(), done: false }];
    case 'toggle':
      return tasks.map((task) => task.id === action.id ? { ...task, done: !task.done } : task);
    case 'remove':
      return tasks.filter((task) => task.id !== action.id);
    case 'restore':
      return action.tasks;
  }
}
