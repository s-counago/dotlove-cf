import { useEffect } from 'react';

export default function HeartTrail() {
  useEffect(() => {
    let lastTime = 0;
    const delay = 80; // milliseconds between hearts (lower = more)

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < delay) return;
      lastTime = now;

      const heart = document.createElement('div');
      heart.className = 'mouse-heart';
      heart.innerText = ['❤️', '💖', '💕'][Math.floor(Math.random() * 3)];

      // Offset the heart slightly behind the cursor
      heart.style.left = e.clientX - 10 + 'px';
      heart.style.top = e.clientY + 20 + 'px';

      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 1800); // matches the animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
