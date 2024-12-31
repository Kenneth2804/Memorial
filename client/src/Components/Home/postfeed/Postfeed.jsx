import React from 'react';
import "../../../styles/postfeed.css"

function Postfeed() {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Just had an amazing day at the beach! 🏖️ #summervibes',
      image: 'https://pixabay.com/es/photos/marcadores-explorador-marcador-surf-5243253/',
      likes: 42,
      comments: 5,
      shares: 2,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Excited to announce my new project! Stay tuned for more details. 🚀',
      likes: 108,
      comments: 23,
      shares: 15,
    },
  ];

  return (
    <div className="postFeed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="postHeader">
            <h3>{post.author}</h3>
          </div>
          <p className="postContent">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post image" className="styles.postImage" />
          )}
          <div className="postActions">
            <button>❤️ {post.likes}</button>
            <button>💬 {post.comments}</button>
            <button>🔁 {post.shares}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Postfeed;