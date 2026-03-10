import React from 'react';
import layoutStyles from '../App.module.css';
import styles from './Notifications.module.css';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      user: "Sarah UI",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      action: "liked your post",
      time: "2 minutes ago",
      unread: true
    },
    {
      id: 2,
      user: "TechInsider",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
      action: "commented on your photo: 'Looks amazing!'",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      user: "Vue Master",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vue",
      action: "started following you",
      time: "3 hours ago",
      unread: false
    },
    {
      id: 4,
      user: "Alex Dev",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      action: "mentioned you in a comment",
      time: "Yesterday",
      unread: false
    }
  ];

  return (
    <div className={layoutStyles.pageCard} style={{ padding: 0, overflow: 'hidden' }}>
      <div className={layoutStyles.feedHeader} style={{ padding: '1.5rem 1.5rem 0.5rem' }}>
        <h3>Notifications</h3>
      </div>
      
      <div className={styles.notificationsList}>
        {notifications.map(notif => (
          <div key={notif.id} className={`${styles.notificationItem} ${notif.unread ? styles.unread : ''}`}>
            <img src={notif.avatarUrl} alt={notif.user} className={styles.avatar} />
            <div className={styles.content}>
              <p><strong>{notif.user}</strong> {notif.action}</p>
              <span className={styles.time}>{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
