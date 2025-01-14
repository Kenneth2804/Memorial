import React, { useState } from 'react';
import { Home, Users, MessageCircle, Heart } from 'lucide-react';
import '../../../styles/leftsidebar.css';
import Logout from '../../login/Logout';

const Leftsidebar = () => {
  const [posts] = useState([
    {
      id: 1,
      username: 'john_doe',
      profilePic: 'https://cdn-icons-png.flaticon.com/512/219/219988.png',
      content: 'Just enjoying a beautiful day!',
      image: 'https://cdn-icons-png.flaticon.com/512/219/219988.png',
      likes: 42,
      comments: [
        { id: 1, username: 'jane_smith', text: 'Looks amazing!' },
        { id: 2, username: 'mike_tech', text: 'Great photo!' }
      ]
    }
  ]);

  const [activeUsers] = useState([
    { id: 1, username: 'jane_smith', profilePic: 'https://cdn-icons-png.flaticon.com/512/219/219988.png' },
    { id: 2, username: 'mike_tech', profilePic: 'https://cdn-icons-png.flaticon.com/512/219/219988.png' }
  ]);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-icon">
          <Home className="icon" size={24} />
          <span className="icon-label">Home</span>
        </div>
        <div className="sidebar-icon">
          <MessageCircle className="icon" size={24} />
          <span className="icon-label">Messages</span>
        </div>
        <div className="sidebar-icon">
          <Users className="icon" size={24} />
          <span className="icon-label">Friends</span>
        </div>
        <div>
          <Logout></Logout>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.profilePic} alt="Profile" className="profile-pic" />
              <span className="username">{post.username}</span>
            </div>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post" className="post-image" />}
            <div className="post-actions">
              <div>
                <Heart className="icon" size={20} />
                <span>{post.likes} Likes</span>
              </div>
              <div>
                <MessageCircle className="icon" size={20} />
                <span>{post.comments.length} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Memories */}
      <div className="active-users">
        <h2 className="active-users-title">Memories</h2>
        <div className="user-grid">
          {activeUsers.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.profilePic} alt={user.username} className="user-image" />
              <span className="user-name">{user.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Leftsidebar;
