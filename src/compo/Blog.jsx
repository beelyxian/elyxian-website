import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import PremiumLoader from "./PremiumLoader";
function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const initialBlog = location.state?.blog || null;

  const [blog, setBlog] = useState(initialBlog);
  const [loading, setLoading] = useState(!initialBlog);
  const [error, setError] = useState(null);
 useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  useEffect(() => {
    if (blog) {
      return;
    }

    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://elyxianback.onrender.com/api/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        setError("Blog not found or error fetching blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, blog]);

  if (loading) return <p className="blog-detail-loading-text"><PremiumLoader/></p>;
  if (error) return <p className="blog-detail-error-text">{error}</p>;
  if (!blog) return <p className="blog-detail-error-text">No blog data available.</p>;

  return (
    <>
      <style>{`
        .blog-detail-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .blog-detail-back-btn {
          margin-bottom: 20px;
          padding: 8px 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .blog-detail-back-btn:hover {
          background-color: #45a049;
        }
        .blog-detail-title {
          font-size: 2.2rem;
          margin-bottom: 20px;
          color: #333;
        }
        .blog-detail-image {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          margin-bottom: 25px;
          border-radius: 8px;
        }
        .blog-detail-content {
          font-size: 1.1rem;
          color: #555;
          white-space: pre-wrap;
        }
        .blog-detail-loading-text, .blog-detail-error-text {
          text-align: center;
          margin-top: 50px;
          font-size: 1.2rem;
          color: #666;
        }
      `}</style>

      <div className="blog-detail-container">
        <button className="blog-detail-back-btn" onClick={() => navigate(-1)}>← Back</button>

        <h1 className="blog-detail-title">{blog.title}</h1>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-detail-image"
          />
        )}

        <div className="blog-detail-content">{blog.content}</div>
      </div>
    </>
  );
}

export default BlogDetail;
