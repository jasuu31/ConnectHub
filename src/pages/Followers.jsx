import React from 'react';
import layoutStyles from '../App.module.css';

const Followers = () => {
  const followers = [
    { id: 1, name: "Sarah UI", handle: "@sarahdesigns", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", bio: "UI Designer | Making the web beautiful" },
    { id: 2, name: "TechInsider", handle: "@techinsider", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech", bio: "All the latest tech news and insights." },
    { id: 3, name: "Vue Master", handle: "@vuemaster", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vue", bio: "Vue.js core team member." },
    { id: 4, name: "React God", handle: "@reactgod", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=React", bio: "I build fast React apps." },
    { id: 5, name: "Design Ninja", handle: "@designninja", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja", bio: "Figma is my weapon." },
  ];

  return (
    <div className={layoutStyles.pageCard} style={{ padding: 0 }}>
      <div className={layoutStyles.feedHeader}>
        <h3>Followers</h3>
      </div>
      
      <div>
        {followers.map(follower => (
          <div key={follower.id} style={{ 
            display: 'flex', 
            gap: '1rem', 
            padding: '1rem', 
            borderBottom: '1px solid var(--border-color)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <img 
              src={follower.avatarUrl} 
              alt={follower.name} 
              style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e5e7eb' }} 
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{follower.name}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{follower.handle}</span>
                </div>
                <button className={layoutStyles.followBtn} style={{ padding: '0.3rem 1rem' }}>Follow</button>
              </div>
              <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-primary)', fontSize: '0.95rem' }}>{follower.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
