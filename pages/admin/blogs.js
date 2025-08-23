// pages/admin/blogs.js
import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdminBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        tags: tags.split(",").map((t) => t.trim()), // converts "tag1, tag2" → ["tag1","tag2"]
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setContent("");
      setTags("");
      setImageUrl("");
      setSuccess("✅ Blog added successfully!");
    } catch (error) {
      console.error("Error adding blog: ", error);
      setSuccess("❌ Error adding blog. Check console.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>📝 Admin - Add Blog</h1>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}
