import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Bell, Mail, Bookmark, User, Users, MoreHorizontal, Feather, Moon, Sun } from 'lucide-react';
import styles from './SidebarNav.module.css';

const SidebarNav = ({ toggleTheme, isDark }) => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Explore', path: '/explore', icon: Search },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Messages', path: '/messages', icon: Mail },
    { name: 'Bookmarks', path: '/bookmarks', icon: Bookmark },
    { name: 'Followers', path: '/followers', icon: Users },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.topSection}>
        <div className={styles.logoItem} style={{ textDecoration: 'none', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', borderRadius: '9999px', width: 'fit-content', cursor: 'pointer', transition: 'background-color 0.2s' }}>
          <Feather size={32} color="var(--primary-color)" />
          <span className={styles.navText} style={{ fontSize: '1.5rem', fontWeight: 800 }}>ConnectHub</span>
        </div>
        
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <item.icon size={26} strokeWidth={2.5} />
            <span className={styles.navText}>{item.name}</span>
          </NavLink>
        ))}
        
        <button onClick={toggleTheme} className={styles.navItem} aria-label="Toggle theme">
          {isDark ? <Sun size={26} strokeWidth={2.5} /> : <Moon size={26} strokeWidth={2.5} />}
          <span className={styles.navText}>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <button className={styles.postBtn}>
          <span className={styles.postText}>Post</span>
          <Feather className={styles.postIcon} size={24} color="white" />
        </button>
      </div>

      <div className={styles.userProfile}>
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className={styles.avatar} />
        <div className={styles.userInfo}>
          <strong>Alex Dev</strong>
          <span>@alexcodes</span>
        </div>
        <MoreHorizontal size={20} className={styles.moreIcon} />
      </div>
    </nav>
  );
};

export default SidebarNav;
