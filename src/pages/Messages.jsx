import React from 'react';
import layoutStyles from '../App.module.css';
import styles from './Messages.module.css';

const Messages = () => {
  const messages = [
    {
      id: 1,
      user: "Sarah UI",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      lastMessage: "Hey, are we still on for the design review tomorrow?",
      time: "10:42 AM",
      unread: true,
      online: true
    },
    {
      id: 2,
      user: "Vue Master",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vue",
      lastMessage: "I finally figured out that bug we were talking about!",
      time: "Yesterday",
      unread: false,
      online: true
    },
    {
      id: 3,
      user: "TechInsider",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
      lastMessage: "Thanks for sharing that article.",
      time: "Monday",
      unread: false,
      online: false
    },
    {
      id: 4,
      user: "Design Ninja",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja",
      lastMessage: "Check out this new Figma plugin.",
      time: "Oct 12",
      unread: false,
      online: false
    }
  ];

  return (
    <div className={layoutStyles.pageCard} style={{ padding: 0, overflow: 'hidden' }}>
      <div className={layoutStyles.feedHeader} style={{ padding: '1.5rem 1.5rem 0.5rem' }}>
        <h3>Messages</h3>
      </div>
      
      <div className={styles.messagesList}>
        {messages.map(msg => (
          <div key={msg.id} className={`${styles.messageItem} ${msg.unread ? styles.unread : ''}`}>
            <div className={styles.avatarContainer}>
              <img src={msg.avatarUrl} alt={msg.user} className={styles.avatar} />
              {msg.online && <div className={styles.onlineIndicator}></div>}
            </div>
            
            <div className={styles.content}>
              <div className={styles.headerRow}>
                <h4 className={styles.name}>{msg.user}</h4>
                <span className={styles.time}>{msg.time}</span>
              </div>
              <p className={styles.preview}>{msg.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
