type Props = {
    isPublic: boolean;
  };
  
  export default function LandingPage({ isPublic }: Props) {
    function handleBurst(e: React.MouseEvent) {
        const burst = document.createElement('div');
        burst.className = 'heart-burst';
      
        const emojis = ['💖', '💕', '❤️', '🌸'];
        for (let i = 0; i < 10; i++) {
          const emoji = document.createElement('span');
          emoji.className = 'burst-emoji';
          emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
          emoji.style.left = Math.random() * 100 + '%';
          emoji.style.animationDelay = '0';//`${Math.random()}s`;
          burst.appendChild(emoji);
        }
      
        (e.currentTarget as HTMLElement).appendChild(burst);
      
        setTimeout(() => {
          burst.remove();
        }, 1500);
      }
      
    return (
        <div>
          <h1>La Mujer Más Bonita Del Planeta</h1>
          {isPublic ? (
            <div className="photo-container" onClick={handleBurst}>
            <img
              src="/her-photo.jpg"
              alt="La mujer más bonita"
              className="photo"
            />
          </div>
          ) : (
            <p style={{ fontSize: '1.2rem', color: '#cc3366' }}>
              Si eres la mujer más bonita, ya sabrás cómo entrar :P  💌
            </p>
          )}
        </div>
      );
  }
  