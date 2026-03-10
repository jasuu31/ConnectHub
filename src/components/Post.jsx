import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, BarChart2, MoreHorizontal } from 'lucide-react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const postData = post || {
    id: 1,
    author: {
      name: "User",
      handle: "@user",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=user"
    },
    content: "Sample content...",
    timestamp: "1h",
    likes: 0,
    comments: 0,
    shares: 0,
    views: 0
  };

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(postData.likes);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweetsCount, setRetweetsCount] = useState(postData.shares);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleRetweet = (e) => {
    e.stopPropagation();
    setIsRetweeted(!isRetweeted);
    setRetweetsCount(prev => isRetweeted ? prev - 1 : prev + 1);
  };

  return (
    <article className={styles.post}>
      <div className={styles.avatarColumn}>
        <img src={postData.author.avatarUrl} alt={postData.author.name} className={styles.avatar} />
      </div>
      
      <div className={styles.contentColumn}>
        <div className={styles.postHeader}>
          <div className={styles.authorInfo}>
            <span className={styles.name}>{postData.author.name}</span>
            <span className={styles.handle}>{postData.author.handle}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.timestamp}>{postData.timestamp}</span>
          </div>
          <button className={styles.moreBtn}><MoreHorizontal size={18} /></button>
        </div>

        <div className={styles.postContent}>
          <p>{postData.content}</p>
          {postData.imageUrl && (
            <div className={styles.imageContainer}>
              <img src={postData.imageUrl} alt="Post attachment" className={styles.postImage} />
            </div>
          )}
        </div>

        <div className={styles.postActions}>
          <button className={`${styles.actionBtn} ${styles.replyBtn}`}>
            <div className={styles.iconWrapper}><MessageCircle size={18} /></div>
            <span>{postData.comments}</span>
          </button>
          
          <button 
            className={`${styles.actionBtn} ${styles.retweetBtn} ${isRetweeted ? styles.retweeted : ''}`}
            onClick={handleRetweet}
          >
            <div className={styles.iconWrapper}><Repeat2 size={18} /></div>
            <span>{retweetsCount}</span>
          </button>
          
          <button 
            className={`${styles.actionBtn} ${styles.likeBtn} ${isLiked ? styles.liked : ''}`} 
            onClick={handleLike}
          >
            <div className={styles.iconWrapper}>
              <Heart size={18} fill={isLiked ? "#f91880" : "none"} color={isLiked ? "#f91880" : "currentColor"} />
            </div>
            <span>{likesCount}</span>
          </button>
          
          <button className={`${styles.actionBtn} ${styles.viewBtn}`}>
            <div className={styles.iconWrapper}><BarChart2 size={18} /></div>
            <span>{postData.views || 0}</span>
          </button>
          
          <div className={styles.rightActions}>
            <button className={`${styles.actionBtn} ${styles.shareBtn}`}>
              <div className={styles.iconWrapper}><Share size={18} /></div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(Post);
