import { useMemo, useState } from 'react';
import { useTasks } from '../context/TaskContext';
import type { Filter } from '../types';

// Quadro interativo: entrada, contagem, filtros e lista de tarefas.
export function TaskBoard() {
  // Lista compartilhada e função que envia ações ao reducer.
  const { tasks, dispatch } = useTasks();
  // Estados locais: texto do formulário e filtro selecionado.
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  // A filtragem muda a visualização, mas não apaga tarefas da lista original.
  const visible = useMemo(() => tasks.filter((task) => filter === 'all' || (filter === 'done' ? task.done : !task.done)), [tasks, filter]);
  // A contagem alimenta o indicador e a barra de progresso.
  const done = tasks.filter((task) => task.done).length;

  // Trata o envio do formulário sem recarregar a página nem aceitar texto vazio.
  function submit(event: React.FormEvent) {
    // Impede o envio padrão do formulário, que recarregaria a página.
    event.preventDefault();
    // trim remove espaços nas pontas; somente espaços não formam uma tarefa.
    if (!title.trim()) return;
    // dispatch solicita ao reducer a criação da nova tarefa.
    dispatch({ type: 'add', title });
    // Limpa o campo depois de enviar a ação.
    setTitle('');
  }

  // JSX descreve a interface; o React a atualiza quando o estado muda.
  return <section className="task-app" aria-label="Quadro de tarefas React">
    {/* A largura da barra representa a proporção de tarefas concluídas. */}
    <div className="task-summary"><span>{done}/{tasks.length} concluídas</span><div><i style={{ width: `${tasks.length ? done / tasks.length * 100 : 0}%` }} /></div></div>
    {/* Campo controlado: seu valor sempre acompanha o estado title. */}
    <form onSubmit={submit}>
      <label htmlFor="task-title">Nova tarefa</label>
      <div className="input-row"><input id="task-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: validar apresentação" /><button type="submit">Adicionar</button></div>
    </form>
    {/* setFilter escolhe o recorte exibido; as ações não modificam o filtro. */}
    <div className="filters" aria-label="Filtros">
      {([['all','Todas'], ['pending','Pendentes'], ['done','Concluídas']] as [Filter,string][]).map(([value, label]) => <button className={filter === value ? 'active' : ''} onClick={() => setFilter(value)} key={value}>{label}</button>)}
    </div>
    {/* Cada tarefa usa seu ID como key e envia toggle/remove ao reducer. */}
    <ul className="task-list">
      {visible.map((task) => <li key={task.id} className={task.done ? 'done' : ''}>
        <button className="task-toggle" onClick={() => dispatch({ type: 'toggle', id: task.id })} aria-label={`Alternar ${task.title}`}><span>{task.done ? '✓' : ''}</span>{task.title}</button>
        <button className="remove" onClick={() => dispatch({ type: 'remove', id: task.id })} aria-label={`Remover ${task.title}`}>×</button>
      </li>)}
    </ul>
  </section>;
}
