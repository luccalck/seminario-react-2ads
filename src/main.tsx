// import traz funções, componentes e estilos de bibliotecas ou outros arquivos.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TaskProvider } from './context/TaskContext';
import './styles.css';

// Liga o React ao elemento #root do index.html. StrictMode ajuda a detectar
// problemas em desenvolvimento; HashRouter controla as rotas; TaskProvider
// disponibiliza o estado das tarefas para App e seus componentes.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <TaskProvider><App /></TaskProvider>
    </HashRouter>
  </StrictMode>,
);
