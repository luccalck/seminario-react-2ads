import { useMemo, useState } from 'react';
import { useTasks } from '../context/TaskContext';
import type { Filter } from '../types';

export function TaskBoard() {
  const { tasks, dispatch } = useTasks();
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const visible = useMemo(() => tasks.filter((task) => filter === 'all' || (filter === 'done' ? task.done : !task.done)), [tasks, filter]);
  const done = tasks.filter((task) => task.done).length;

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: 'add', title });
    setTitle('');
  }

  return <section className="task-app" aria-label="Quadro de tarefas React">
    <div className="task-summary"><span>{done}/{tasks.length} concluídas</span><div><i style={{ width: `${tasks.length ? done / tasks.length * 100 : 0}%` }} /></div></div>
    <form onSubmit={submit}>
      <label htmlFor="task-title">Nova tarefa</label>
      <div className="input-row"><input id="task-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: validar apresentação" /><button type="submit">Adicionar</button></div>
    </form>
    <div className="filters" aria-label="Filtros">
      {([['all','Todas'], ['pending','Pendentes'], ['done','Concluídas']] as [Filter,string][]).map(([value, label]) => <button className={filter === value ? 'active' : ''} onClick={() => setFilter(value)} key={value}>{label}</button>)}
    </div>
    <ul className="task-list">
      {visible.map((task) => <li key={task.id} className={task.done ? 'done' : ''}>
        <button className="task-toggle" onClick={() => dispatch({ type: 'toggle', id: task.id })} aria-label={`Alternar ${task.title}`}><span>{task.done ? '✓' : ''}</span>{task.title}</button>
        <button className="remove" onClick={() => dispatch({ type: 'remove', id: task.id })} aria-label={`Remover ${task.title}`}>×</button>
      </li>)}
    </ul>
  </section>;
}
