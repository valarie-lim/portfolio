import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "../lib/blog";
import { marked } from "marked";
import "./BlogLayout.css";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="blog-error-container">
        <div className="header-spacer" /> {/* Adds safety padding */}
        <p>Post not found</p>
        <Link to="/blog" className="back-btn">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const htmlContent = marked.parse(post.content);

  return (
    <main className="blog-detail-container">
      {/* 1st item */}
      <Link to="/blog" className="back-btn">
        ← Back to Articles
      </Link>
      {/* 2nd item */}
      <div className="blog-header">
        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-meta">
          <span>
            By <strong>{post.author}</strong>
          </span>
          <span className="meta-divider">•</span>
          <span>{post.date}</span>
          <span className="meta-divider">•</span>
          <span>{post.readingtime} min read</span>
        </div>

        {post.tagline && <p className="blog-tagline">{post.tagline}</p>}
      </div>

      <hr className="blog-separator" />

      <article className="blog-content-body" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
