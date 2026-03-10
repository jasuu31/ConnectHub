import React from 'react';
import styles from './FollowersRow.module.css';
import { Plus } from 'lucide-react';

const FollowersRow = () => {
  const followers = [
    { id: 1, name: "Sarah UI", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { id: 2, name: "TechInsider", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech" },
    { id: 3, name: "Vue Master", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vue" },
    { id: 4, name: "React God", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=React" },
    { id: 5, name: "Design Ninja", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja" },
    { id: 6, name: "DevOps Pro", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevOps" },
  ];

  return (
    <div className={styles.rowContainer}>
      <div className={styles.followersList}>
        <div className={`${styles.followerCard} ${styles.addStoryCard}`}>
          <div className={styles.avatarWrapperContainer}>
            <div className={styles.avatarWrapper}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Your Profile" className={styles.avatar} />
            </div>
            <div className={styles.plusIconWrapper}>
              <Plus size={16} color="white" strokeWidth={3} />
            </div>
          </div>
          <span className={styles.name}>Create Story</span>
        </div>
        
        {followers.map(follower => (
          <div key={follower.id} className={styles.followerCard}>
            <div className={styles.avatarWrapperContainer}>
              <div className={`${styles.avatarWrapper} ${styles.hasStory}`}>
                <img src={follower.avatarUrl} alt={follower.name} className={styles.avatar} />
              </div>
            </div>
            <span className={styles.name}>{follower.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowersRow;
