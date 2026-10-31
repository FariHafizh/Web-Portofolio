import { useEffect, useRef } from 'react';

import { assetUrl } from '../assetUrl';
import { content } from '../content';

/**
 * Popup slide project: semua slide ditumpuk vertikal dan di-scroll ke bawah.
 * Pakai elemen <dialog> bawaan browser, jadi Esc untuk menutup dan focus trap
 * sudah otomatis jalan tanpa library tambahan.
 */
export default function ProjectViewer({ project, onClose }) {
  const dialogRef = useRef(null);
  const labels = content.portfolio.viewer;
  const total = project.slides.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    // Cek `open` dulu supaya aman di React StrictMode (effect jalan dua kali saat dev).
    if (!dialog.open) dialog.showModal();

    // Kunci scroll halaman di belakang popup.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Tutup lewat dialog bawaan browser, supaya fokus balik ke tombol pemicu.
  function handleClose() {
    dialogRef.current?.close();
  }

  // Klik area gelap di luar panel akan menutup popup.
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) handleClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="viewer"
      aria-labelledby="viewer-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className="viewer-panel">
        <header className="viewer-header">
          <div>
            <h3 id="viewer-title" className="viewer-title">
              {project.title}
            </h3>
            <p className="viewer-count">
              {total} {labels.slidesLabel}
            </p>
          </div>

          <button
            type="button"
            className="button"
            onClick={handleClose}
            aria-label={labels.closeAria}
          >
            {labels.close}
          </button>
        </header>

        <ol className="viewer-slides">
          {project.slides.map((slide, slideIndex) => (
            <li key={slide.id} className="viewer-slide">
              <img
                src={assetUrl(slide.img)}
                alt={`${project.title}, slide ${slideIndex + 1} of ${total}`}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ol>
      </div>
    </dialog>
  );
}