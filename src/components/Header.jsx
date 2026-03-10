import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Mail, User, Search, Moon, Sun } from 'lucide-react';
import styles from './Header.module.css';

const Header = ({ toggleTheme, isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/" style={{textDecoration: 'none'}}><h2>SocialDash</h2></NavLink>
      </div>
      
      <form className={styles.searchContainer} onSubmit={handleSearch}>
        <div className={styles.searchInputWrapper}>
          <Search size={16} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search users or posts..." 
            className={styles.searchBar}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
      
      <nav className={styles.nav}>
        <button onClick={toggleTheme} className={styles.themeToggleBtn} aria-label="Toggle theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className={styles.divider}></div>
        <NavLink to="/" className={({isActive}) => isActive ? `${styles.iconBtn} ${styles.active}` : styles.iconBtn} aria-label="Home" title="Home">
          <Home size={20} />
        </NavLink>
        <NavLink to="/notifications" className={({isActive}) => isActive ? `${styles.iconBtn} ${styles.active}` : styles.iconBtn} aria-label="Notifications" title="Notifications">
          <Bell size={20} />
        </NavLink>
        <NavLink to="/messages" className={({isActive}) => isActive ? `${styles.iconBtn} ${styles.active}` : styles.iconBtn} aria-label="Messages" title="Messages">
          <Mail size={20} />
        </NavLink>
        <NavLink to="/profile" className={({isActive}) => isActive ? `${styles.iconBtn} ${styles.active}` : styles.iconBtn} aria-label="Profile" title="Profile">
          <User size={20} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
