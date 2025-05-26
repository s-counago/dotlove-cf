import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import LandingPage from './LandingPage.tsx';
import CredentialsPage from './CredentialsPage.tsx';
import './App.css';
import FloatingEmojis from './FloatingEmojis';
import HeartTrail from './HeartTrail';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    const publicState = localStorage.getItem('isPublic');
    if (publicState === 'true') setIsPublic(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('isPublic', isPublic.toString());
  }, [isPublic]);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <nav style={{ padding: '10px' }}>
        <Link to="/">Home</Link> | <Link to="/credentials">Credentials</Link>
      </nav>
      <FloatingEmojis />
      <HeartTrail />
      <Routes>
        <Route path="/" element={<LandingPage isPublic={isPublic} />} />
        <Route path="/credentials" element={
          <CredentialsPage
            isLoggedIn={isLoggedIn}
            isPublic={isPublic}
            setIsPublic={setIsPublic}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
