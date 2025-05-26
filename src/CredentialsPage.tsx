import { useState } from 'react';

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
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
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
      <h2>Welcome, Love 💕</h2>
      <p>Your photo is currently: <strong>{isPublic ? 'Public' : 'Private'}</strong></p>
      <button onClick={() => setIsPublic(!isPublic)}>
        {isPublic ? 'Hide It ❌' : 'Show Your Beauty ✨'}
      </button>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
