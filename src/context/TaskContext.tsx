import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import type { Task, TaskAction } from '../types';
import { initialTasks, tasksReducer } from './taskReducer';

type TaskContextValue = { tasks: Task[]; dispatch: React.Dispatch<TaskAction> };
// O Context disponibiliza tarefas e dispatch sem repassar props por várias telas.
const TaskContext = createContext<TaskContextValue | null>(null);

// Fornece o estado inicial ao reducer, recuperando tarefas já salvas.
function readStoredTasks() {
  try {
    // localStorage armazena texto; a chave identifica a lista deste projeto.
    const stored = localStorage.getItem('reactlab.tasks');
    if (!stored) return initialTasks;
    // Converte o texto JSON em dados; unknown exige validação antes do uso.
    const parsed: unknown = JSON.parse(stored);
    // Valida a estrutura antes de tratá-la como Task[]; dados inválidos não quebram a tela.
    if (!Array.isArray(parsed) || !parsed.every((task) =>
      typeof task === 'object' && task !== null &&
      typeof task.id === 'string' && typeof task.title === 'string' && typeof task.done === 'boolean')) {
      return initialTasks;
    }
    // Após a validação, o TypeScript pode tratar a lista como Task[].
    return parsed as Task[];
  } catch {
    // JSON malformado ou acesso indisponível: usa a lista inicial.
    return initialTasks;
  }
}

// Envolve a aplicação e centraliza as regras e a persistência das tarefas.
export function TaskProvider({ children }: { children: ReactNode }) {
  // useReducer aplica tasksReducer; readStoredTasks fornece o estado inicial.
  const [tasks, dispatch] = useReducer(tasksReducer, undefined, readStoredTasks);
  // Sempre que tasks muda, sincroniza a lista com o armazenamento deste navegador.
  useEffect(() => localStorage.setItem('reactlab.tasks', JSON.stringify(tasks)), [tasks]);
  // Os componentes descendentes podem consumir o estado por meio de useTasks().
  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>;
}

// Hook de acesso ao Context, com erro claro se for usado fora do Provider.
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks precisa estar dentro de TaskProvider');
  return context;
}
