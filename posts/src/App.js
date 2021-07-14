import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("posts")
      .then((response) =>
        setPosts((oldValue) => [...oldValue, ...response.data])
      );
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
