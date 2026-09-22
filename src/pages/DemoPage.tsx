import { TaskBoard } from '../components/TaskBoard';
import { SectionHeading } from '../components/SectionHeading';

export function DemoPage() {
  return <section className="demo-page">
    <div className="demo-copy"><SectionHeading eyebrow="DEMONSTRAÇÃO PRÁTICA" title="Estado previsível. Resultado persistente." text="Adicione, conclua, filtre e remova tarefas. Recarregue a página: o estado permanece salvo no navegador." /><div className="code-note"><span>Recursos em uso</span><code>components · props · useReducer · useEffect · Context · keys</code></div></div>
    <TaskBoard />
  </section>;
}
