import React from 'react';
import blogData from '../data/blogs.json';
import './../styles/BlogSection.css';
import img from '../assest/chiasalad.png'
function BlogSection() {

  return (
    <section className="blog-section">
      <h2 className="blog-title">Healthy Recipes</h2>
      <p className="blog-subtitle">Discover tasty ways to use Elyxian Seeds 🌿</p>

      <div className="blog-cards">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={img} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <a href={`/blog/${blog.slug}`} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
