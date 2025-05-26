import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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
    if (username === 'miriamlamasguapa' && password === 'amiemonos') {
      setIsLoggedIn(true);
    } else {
      alert('No :(');
    }
  };

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
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
