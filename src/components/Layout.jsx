import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import { Search } from 'lucide-react';
import styles from '../App.module.css'; 

const Layout = ({ toggleTheme, isDark }) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.mainContent}>
        <div className={styles.layout}>
          <header className={styles.sidebar}>
            <SidebarNav toggleTheme={toggleTheme} isDark={isDark} />
          </header>
          
          <main className={styles.feed}>
            <Outlet />
          </main>
          
          <aside className={styles.rightSidebar}>
            <div className={styles.searchContainer}>
              <Search size={18} className={styles.searchIcon} />
              <input type="text" placeholder="Search" className={styles.searchInput} />
            </div>

            <div className={styles.widgetCard}>
              <h4>What's happening</h4>
              <ul className={styles.trendingList}>
                <li>
                  <span className={styles.trendCategory}>Trending in Tech</span>
                  <strong>#ReactJS</strong>
                  <span className={styles.trendPosts}>125K posts</span>
                </li>
                <li>
                  <span className={styles.trendCategory}>Programming</span>
                  <strong>#WebDesign</strong>
                  <span className={styles.trendPosts}>84K posts</span>
                </li>
                <li>
                  <span className={styles.trendCategory}>JavaScript</span>
                  <strong>#Vite</strong>
                  <span className={styles.trendPosts}>42K posts</span>
                </li>
              </ul>
            </div>
            
            <div className={`${styles.widgetCard} ${styles.mt4}`} style={{ marginTop: '1rem' }}>
              <h4>Who to follow</h4>
              <div className={styles.suggestionList}>
                <div className={styles.suggestion}>
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vue" alt="Vue Master" />
                  <div>
                    <strong>Vue Master</strong>
                    <span>@vuemaster</span>
                  </div>
                  <button className={styles.followBtn}>Follow</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Layout;
