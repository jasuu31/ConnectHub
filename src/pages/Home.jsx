import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import { Image, FileVideo, Smile, Calendar, MapPin } from 'lucide-react';
import styles from '../App.module.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      setError(null);
      
      setTimeout(() => {
        // Random error for error handling requirements (10% chance)
        if (Math.random() > 0.9) {
          setError("Failed to load feed. Please try again.");
          setLoading(false);
          return;
        }

        setPosts([
          {
            id: 1,
            author: {
              name: "Alex Dev",
              handle: "@alexcodes",
              avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            },
            content: "Just launched my new portfolio built with React and Vite! 🚀 The performance difference compared to CRA is mind-blowing. #webdev #reactjs",
            imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            timestamp: "2h",
            likes: 42,
            comments: 12,
            shares: 5,
            views: 1205
          },
          {
            id: 2,
            author: {
              name: "Sarah UI",
              handle: "@sarahdesigns",
              avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            },
            content: "Does anyone else spend 50% of their coding time just choosing the right shade of blue? 🎨🔵",
            imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
            timestamp: "5h",
            likes: 128,
            comments: 34,
            shares: 12,
            views: 4532
          },
          {
            id: 3,
            author: {
              name: "TechInsider",
              handle: "@techinsider",
              avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech"
            },
            content: "Breaking: AI coding assistants are now capable of building entire frontend architectures in seconds. The future is here.",
            timestamp: "8h",
            likes: 532,
            comments: 89,
            shares: 211,
            views: "12K"
          }
        ]);
        setLoading(false);
      }, 1200);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className={styles.feedHeader}>
        <div className={styles.feedTabs}>
          <div className={`${styles.feedTab} ${styles.activeTab}`}>
            <span>For you</span>
            <div className={styles.tabIndicator}></div>
          </div>
          <div className={styles.feedTab}>
            <span>Following</span>
          </div>
        </div>
      </div>

      <div className={styles.composerContainer}>
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className={styles.composerAvatar} />
        <div className={styles.composerInputArea}>
          <input type="text" placeholder="What is happening?!" className={styles.composerInput} />
          <div className={styles.composerActions}>
             <div className={styles.actionIcons}>
               <Image size={20} className={styles.composerIcon} />
               <FileVideo size={20} className={styles.composerIcon} />
               <Smile size={20} className={styles.composerIcon} />
               <Calendar size={20} className={styles.composerIcon} />
               <MapPin size={20} className={styles.composerIcon} />
             </div>
             <button className={styles.postBtnSmall}>Post</button>
          </div>
        </div>
      </div>

      {error && (
        <div className={styles.errorState}>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className={styles.retryBtn}>Retry</button>
        </div>
      )}

      {loading && !error ? (
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading your feed...</p>
        </div>
      ) : (
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      )}
    </>
  );
};

export default Home;
