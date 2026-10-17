import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/blog";
import "./BlogFeed.css";

export default function BlogFeed() {
  const posts = getAllPosts();

  return (
    <div className="blog-feed-container">
      {posts.map((post) => {
        return (
          <article key={post.slug} className="blog-article-card">
            {post.image && (
              <div className="blog-card-image-wrapper">
                <img src={post.image} alt={`Cover for ${post.title}`} className="blog-card-image" />
              </div>
            )}

            <h2>
              <Link to={`/blog/${post.slug}`} className="blog-title-link">
                {post.title}
              </Link>
            </h2>
            <p>
              <small>
                By {post.author} · {post.date} · {post.readingtime} min read
              </small>
            </p>

            <p>{post.preview}</p>
          </article>
        );
      })}
    </div>
  );
}
