import { TaskBoard } from '../components/TaskBoard';
import { SectionHeading } from '../components/SectionHeading';

// A página apresenta a atividade e incorpora o quadro funcional de tarefas.
export function DemoPage() {
  return <section className="demo-page">
    <div className="demo-copy"><SectionHeading eyebrow="DEMONSTRAÇÃO PRÁTICA" title="Estado previsível. Resultado persistente." text="Adicione, conclua, filtre e remova tarefas. Recarregue a página: o estado permanece salvo no navegador." /><div className="code-note"><span>Execução</span><code>npm ci · npm run dev · navegador</code></div><div className="code-note"><span>Recursos React em uso</span><code>components · props · useReducer · useEffect · Context · keys</code></div></div>
    <TaskBoard />
  </section>;
}
