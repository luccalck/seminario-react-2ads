import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import type { Task, TaskAction } from '../types';
import { initialTasks, tasksReducer } from './taskReducer';

type TaskContextValue = { tasks: Task[]; dispatch: React.Dispatch<TaskAction> };
const TaskContext = createContext<TaskContextValue | null>(null);

function readStoredTasks() {
  try {
    const stored = localStorage.getItem('reactlab.tasks');
    if (!stored) return initialTasks;
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.every((task) =>
      typeof task === 'object' && task !== null &&
      typeof task.id === 'string' && typeof task.title === 'string' && typeof task.done === 'boolean')) {
      return initialTasks;
    }
    return parsed as Task[];
  } catch { return initialTasks; }
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, undefined, readStoredTasks);
  useEffect(() => localStorage.setItem('reactlab.tasks', JSON.stringify(tasks)), [tasks]);
  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks precisa estar dentro de TaskProvider');
  return context;
}
