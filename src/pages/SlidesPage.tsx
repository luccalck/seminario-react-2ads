import { useCallback, useEffect, useState } from 'react';
import { members, slides } from '../data/presentation';
import { ReactOrbit } from '../components/ReactOrbit';

export function SlidesPage() {
  const [index, setIndex] = useState(0);
  const move = useCallback((delta: number) => setIndex((current) => Math.min(slides.length - 1, Math.max(0, current + delta))), []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) move(1);
      if (['ArrowLeft', 'PageUp'].includes(event.key)) move(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [move]);
  const slide = slides[index];
  return <section className="deck-shell">
    <div className="deck-toolbar"><span>Use ← → ou espaço</span><button onClick={() => document.documentElement.requestFullscreen?.()}>Tela cheia</button></div>
    <article className={`web-slide slide-${index + 1}`}>
      <div className="slide-top"><span>{slide.kicker}</span><span>{String(index + 1).padStart(2, '0')} / {slides.length}</span></div>
      <div className="slide-body"><div className="slide-copy"><h1>{slide.title}</h1><p>{slide.statement}</p><ul>{slide.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{index === 0 && <div className="cover-members">{members.map((member) => <span key={member}>{member}</span>)}</div>}{slide.code && <pre><code>{slide.code}</code></pre>}</div>{index === 0 ? <ReactOrbit /> : <div className="slide-visual"><b>{String(index + 1).padStart(2, '0')}</b><span>{slide.kicker.split('·').at(-1)}</span></div>}</div>
      <div className="slide-foot"><span>{slide.source ?? 'ReactLab · 2º ADS'}</span><span className="progress"><i style={{ width: `${(index + 1) / slides.length * 100}%` }} /></span></div>
    </article>
    <div className="deck-controls"><button onClick={() => move(-1)} disabled={index === 0}>Anterior</button><div>{slides.map((_, i) => <button key={i} aria-label={`Ir para slide ${i + 1}`} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} />)}</div><button onClick={() => move(1)} disabled={index === slides.length - 1}>Próximo</button></div>
  </section>;
}
