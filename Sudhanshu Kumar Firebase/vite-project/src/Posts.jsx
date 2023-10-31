import React from "react";
import axios from "axios";



function Posts() {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;
    setPosts(posts);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li className="post" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
