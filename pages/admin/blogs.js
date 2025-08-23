// pages/admin/blogs.js
import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export default function AdminBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs
  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    const blogsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setBlogs(blogsData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle new blog submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        tags: tags.split(",").map((t) => t.trim()),
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setContent("");
      setTags("");
      setImageUrl("");
      setSuccess("✅ Blog added successfully!");
      fetchBlogs(); // refresh list
    } catch (error) {
      console.error("Error adding blog: ", error);
      setSuccess("❌ Error adding blog. Check console.");
    }

    setLoading(false);
  };

  // Handle blog delete
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      setSuccess("🗑️ Blog deleted!");
      fetchBlogs(); // refresh list
    } catch (error) {
      console.error("Error deleting blog: ", error);
      setSuccess("❌ Error deleting blog. Check console.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>📝 Admin - Manage Blogs</h1>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Tags (comma separated)</label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Image URL</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Blog"}
        </button>
      </form>

      {success && <p>{success}</p>}

      {/* Blog List */}
      <h2>📚 Existing Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 100)}...</p>
              <p>
                <b>Tags:</b> {blog.tags?.join(", ")}
              </p>
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  style={{ maxWidth: "200px", display: "block", margin: "1rem 0" }}
                />
              )}
              <button onClick={() => handleDelete(blog.id)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
