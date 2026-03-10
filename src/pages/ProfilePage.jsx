import React from 'react';
import Profile from '../components/Profile';
import Post from '../components/Post';
import styles from '../App.module.css';

const ProfilePage = () => {
  const userPosts = [
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
      shares: 5
    },
    {
      id: 2,
      author: {
        name: "Alex Dev",
        handle: "@alexcodes",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
      },
      content: "Thinking about rewriting my entire stack in Rust... thoughts? 🤔 #rustlang #webdev",
      timestamp: "1d",
      likes: 124,
      comments: 68,
      shares: 15
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Profile />
      
      <div className={styles.feedHeader} style={{ marginTop: '1rem' }}>
        <h3>Your Posts</h3>
      </div>
      
      <div className={styles.feed}>
        {userPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
