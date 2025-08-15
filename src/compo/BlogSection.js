import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BlogSection.css';
import imgPlaceholder from '../assest/chiasalad.png';
import { useNavigate } from 'react-router-dom';
import PremiumLoader from './PremiumLoader';

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.slug}`, { state: { blog } });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://elyxianback.onrender.com/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("❌ Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="loading-text"><PremiumLoader /></div>;
  }

  return (
    <section className="blog-section">
      <h2 className="blog-title">Healthy Recipes</h2>
      <p className="blog-subtitle">Discover tasty ways to use Elyxian Seeds 🌿</p>

      <div className="blog-cards">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="image-wrapper">
                <img
                  src={blog.image || imgPlaceholder}
                  alt={blog.title}
                  className="blog-image"
                />
                <span className="blog-category">
                  {blog.category || "Recipe"}
                </span>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.metaDescription || blog.content?.slice(0, 100) + "..."}</p>
                <button
                  onClick={() => handleReadMore(blog)}
                  className="read-more-btn"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available yet.</p>
        )}
      </div>
    </section>
  );
}

export default BlogSection;
