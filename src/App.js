import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState(null);
  const [postsError, setPostsError] = useState("");
  const [postsLoading, setPostsLoading] = useState(false);

  const [comments, setComments] = useState(null);
  const [commentsError, setCommmentsError] = useState("");
  const [commentsLoading, setCommentsLoading] = useState(false);

  useEffect(() => {
    handlePosts();
    handleComments();
  }, []);

  const handlePosts = async () => {
    setPostsLoading(true);
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
    } catch (err) {
      setPostsError(err.message || "Unexpected Error!");
    } finally {
      setPostsLoading(false);
    }
  };

  const handleComments = async () => {
    setCommentsLoading(true);
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(result.data);
    } catch (err) {
      setCommmentsError(err.message || "Unexpected Error!");
    } finally {
      setCommentsLoading(false);
    }
  };

  return (
    <div className="App">
      {/* Post List */}
      <div>
        <h1>Posts</h1>
        {postsLoading && <p>Posts are loading!</p>}
        {postsError && <p>{postsError}</p>}
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      {/* Comment List */}
      <div>
        <h1>Comments</h1>
        {commentsLoading && <p>Comments are loading!</p>}
        {commentsError && <p>{commentsError}</p>}
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
