// pages/blogs.js

export default function Blogs() {
  // Later we’ll replace this with dynamic blog data from Firestore
  const sampleBlogs = [
    {
      id: 1,
      title: "The Founder’s Blindspot: Why Your Content Isn’t Converting",
      excerpt: "Most founders write to show up, not to stand out. Here’s why your voice needs sharpening...",
      date: "Aug 2025",
    },
    {
      id: 2,
      title: "Narrative Architecture: Turning Stories into Systems",
      excerpt: "Content without structure is noise. Learn how to build an editorial system that compounds attention.",
      date: "Jul 2025",
    },
    {
      id: 3,
      title: "The Craft of Conversion: From POV to Pipeline",
      excerpt: "Your POV isn’t just branding—it’s the seed of every sale. Here’s how to turn thought leadership into demand.",
      date: "Jun 2025",
    },
  ];

  return (
    <section className="container">
      <h1>Articles & Blogs</h1>
      <p>
        Insights, frameworks, and sharp takes from <b>Eureka Craft</b>— 
        crafted to help founders cut through noise, build narrative assets, 
        and scale clarity.
      </p>

      <div className="blog-list">
        {sampleBlogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <p><i>{blog.date}</i></p>
            <a href={`/blogs/${blog.id}`} className="read-more">Read More →</a>
          </article>
        ))}
      </div>

      <style jsx>{`
        .blog-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .blog-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1.5rem;
          background: #fafafa;
          transition: box-shadow 0.3s ease;
        }
        .blog-card:hover {
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .read-more {
          display: inline-block;
          margin-top: 1rem;
          color: #0070f3;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
