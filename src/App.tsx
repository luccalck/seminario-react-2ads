import { NavLink, Route, Routes } from 'react-router-dom';
import { members } from './data/presentation';
import { HomePage } from './pages/HomePage';
import { SlidesPage } from './pages/SlidesPage';
import { DemoPage } from './pages/DemoPage';
import { ReferencesPage } from './pages/ReferencesPage';

export function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <NavLink className="brand" to="/"><span className="brand-mark">⚛</span> ReactLab</NavLink>
        <nav aria-label="Navegação principal">
          <NavLink to="/">Visão geral</NavLink>
          <NavLink to="/slides">Slides HTML</NavLink>
          <NavLink to="/demo">Demonstração</NavLink>
          <NavLink to="/referencias">Referências</NavLink>
        </nav>
      </header>
      <main><Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slides" element={<SlidesPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/referencias" element={<ReferencesPage />} />
      </Routes></main>
      <footer>
        <p>Desenvolvido por {members.slice(0, -1).join(', ')} e {members.at(-1)}.</p>
        <p>2º ADS · SENAI Félix Guisard · 2026</p>
      </footer>
    </div>
  );
}
