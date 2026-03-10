import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Followers from './pages/Followers';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router basename="/ConnectHub/">
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} isDark={isDark} />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="followers" element={<Followers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
