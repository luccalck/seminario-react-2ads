import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TaskProvider } from './context/TaskContext';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <TaskProvider><App /></TaskProvider>
    </HashRouter>
  </StrictMode>,
);
