import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Pembungkus standar untuk tiap section halaman:
 * judul, kalimat pengantar, dan animasi muncul saat di-scroll.
 */
export default function Section({ id, title, intro, children }) {
  const revealRef = useScrollReveal();

  return (
    <section id={id} ref={revealRef} className="section revealable">
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  );
}
