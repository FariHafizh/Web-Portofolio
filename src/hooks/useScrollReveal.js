import { useEffect, useRef } from 'react';

/**
 * Menampilkan elemen dengan animasi saat pertama kali masuk viewport.
 *
 * Pakai: `const ref = useScrollReveal();` lalu pasang `ref` + className "revealable"
 * pada elemen. Class "is-visible" ditambahkan sekali, lalu observer dilepas.
 */
export function useScrollReveal({ threshold = 0.1 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: browser lama tanpa IntersectionObserver langsung ditampilkan.
    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
