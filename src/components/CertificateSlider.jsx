import { useEffect, useRef, useState } from 'react';

import { assetUrl } from '../assetUrl';
import { content } from '../content';

const AUTOPLAY_INTERVAL = 5000; // ms
const SWIPE_THRESHOLD = 50; // px

/**
 * Slider sertifikat: hanya slide aktif yang dirender, arah animasi mengikuti
 * tombol/gestur yang dipakai. Semua state ada di React (tanpa manipulasi DOM manual).
 */
export default function CertificateSlider({ items }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const total = items.length;
  const labels = content.portfolio.slider;

  function goTo(nextIndex) {
    setDirection(nextIndex > index ? 'next' : 'prev');
    setIndex(nextIndex);
  }

  function goNext() {
    setDirection('next');
    setIndex((current) => (current + 1) % total);
  }

  function goPrev() {
    setDirection('prev');
    setIndex((current) => (current - 1 + total) % total);
  }

  // Autoplay; berhenti saat kursor/fokus ada di slider.
  useEffect(() => {
    if (isPaused || total < 2) return;
    const timer = setInterval(() => {
      setDirection('next');
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
    }
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (deltaX <= -SWIPE_THRESHOLD) goNext();
    else if (deltaX >= SWIPE_THRESHOLD) goPrev();
  }

  if (total === 0) return null;

  const activeItem = items[index];

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-stage">
        {/* `key` memaksa React memasang ulang elemen, sehingga animasinya jalan. */}
        <figure key={activeItem.id} className={`slide slide-${direction}`}>
          <img
            src={assetUrl(activeItem.img)}
            alt={`Certificate: ${activeItem.title}`}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div className="slider-caption" aria-live="polite">
        <h4 className="slider-title">{activeItem.title}</h4>
        {activeItem.issuer ? <p className="slider-issuer">{activeItem.issuer}</p> : null}
        <p className="slider-description">{activeItem.description}</p>
      </div>

      <div className="slider-controls">
        <button type="button" className="button" onClick={goPrev} aria-label={labels.prevAria}>
          {labels.prev}
        </button>

        <ol className="slider-dots" aria-label={labels.dotsAria}>
          {items.map((item, itemIndex) => (
            <li key={item.id}>
              <button
                type="button"
                className={itemIndex === index ? 'slider-dot is-active' : 'slider-dot'}
                onClick={() => goTo(itemIndex)}
                aria-label={`${labels.goToSlide} ${itemIndex + 1}: ${item.title}`}
                aria-current={itemIndex === index ? 'true' : undefined}
              />
            </li>
          ))}
        </ol>

        <button type="button" className="button" onClick={goNext} aria-label={labels.nextAria}>
          {labels.next}
        </button>
      </div>
    </div>
  );
}
