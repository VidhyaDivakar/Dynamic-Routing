import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogIndex() {
  return (
    <div className="container">
      <h2>Blog</h2>
<div className="blog-list">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}