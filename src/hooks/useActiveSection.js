import { useEffect, useState } from 'react';

/**
 * Mengembalikan id section yang sedang berada di tengah layar,
 * dipakai Navbar untuk menandai link yang aktif.
 *
 * @param {string[]} sectionIds daftar id section, urut sesuai posisinya di halaman.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Garis pemicu ada tepat di tengah viewport.
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));

    // Tangani saat scroll berada tepat di paling atas atau bawah halaman.
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      if (innerHeight + scrollY >= scrollHeight - 30) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      } else if (scrollY < 80) {
        setActiveId(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
