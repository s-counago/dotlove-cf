import { useEffect } from 'react';

export default function FloatingEmojis() {
  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = document.createElement('div');
      emoji.innerText = ['💖', '✨', '🌸', '❤️'][Math.floor(Math.random() * 4)];
      emoji.style.position = 'fixed';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = '100vh';
      emoji.style.fontSize = '24px';
      emoji.style.pointerEvents = 'none';
      emoji.style.zIndex = '9999';
      emoji.style.animation = 'floatUp 3s linear forwards';

      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 3000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
