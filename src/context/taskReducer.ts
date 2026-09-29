import type { Task, TaskAction } from '../types';

// Conteúdo inicial usado quando ainda não há tarefas válidas no navegador.
export const initialTasks: Task[] = [
  { id: 'arquitetura', title: 'Revisar arquitetura de componentes', done: true },
  { id: 'seguranca', title: 'Validar dependências e segurança', done: false },
  { id: 'demo', title: 'Ensaiar demonstração prática', done: false },
];

// Recebe o estado atual e uma ação; devolve uma NOVA lista, sem mutar a anterior.
export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'add':
      // Identificador único permite distinguir tarefas com o mesmo título.
      return [...tasks, { id: crypto.randomUUID(), title: action.title.trim(), done: false }];
    case 'toggle':
      // Copia apenas a tarefa escolhida e inverte seu estado de conclusão.
      return tasks.map((task) => task.id === action.id ? { ...task, done: !task.done } : task);
    case 'remove':
      // Mantém todas as tarefas, exceto a que possui o ID informado.
      return tasks.filter((task) => task.id !== action.id);
    case 'restore':
      // Permite substituir toda a lista por uma versão fornecida pela ação.
      return action.tasks;
  }
}
