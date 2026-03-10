import React from 'react';
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  // Mock data if no user provided
  const profileData = user || {
    name: "Alex Dev",
    handle: "@alexcodes",
    bio: "Frontend Developer | Building beautiful UIs | React enthusiast",
    location: "San Francisco, CA",
    website: "alexdev.com",
    joinedDate: "Joined March 2021",
    following: 124,
    followers: 892,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.coverPhoto}></div>
      <div className={styles.profileInfo}>
        <div className={styles.avatarContainer}>
          <img src={profileData.avatarUrl} alt={profileData.name} className={styles.avatar} />
          <button className={styles.editBtn}>Edit Profile</button>
        </div>
        
        <div className={styles.personalInfo}>
          <h2>{profileData.name}</h2>
          <p className={styles.handle}>{profileData.handle}</p>
          <p className={styles.bio}>{profileData.bio}</p>
          
          <div className={styles.metaData}>
            <span><MapPin size={16} /> {profileData.location}</span>
            <span><LinkIcon size={16} /> <a href="#">{profileData.website}</a></span>
            <span><Calendar size={16} /> {profileData.joinedDate}</span>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}><strong>{profileData.following}</strong> Following</div>
            <div className={styles.stat}><strong>{profileData.followers}</strong> Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
