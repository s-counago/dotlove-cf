import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


type Props = {
  isLoggedIn: boolean;
  isPublic: boolean;
  setIsPublic: (val: boolean) => void;
  handleLogin: (u: string, p: string) => void;
  handleLogout: () => void;
};

export default function CredentialsPage({
  isLoggedIn,
  isPublic,
  setIsPublic,
  handleLogin,
  handleLogout
}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <div>
        <h2>💖 Secret Access 💖</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password);
        }}>
          <input
            type="text"
            placeholder="Usuaria"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Bienvenida, mi vida 💕</h2>
      <p>El estado de tu foto ahora mismo es: <strong>{isPublic ? 'Público' : 'Privado'}</strong></p>
      <button onClick={() => setIsPublic(!isPublic)}>
        {isPublic ? 'Escóndela ❌' : 'Enséñalo todo ✨'}
      </button>
      <br /><br />
      <button onClick={() => navigate('/')}>🏠</button>
      <br /><br />
      <button onClick={handleLogout}>Cierra sesión</button>
    </div>
  );
}
