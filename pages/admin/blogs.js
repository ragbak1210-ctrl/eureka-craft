import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ManageBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        category,
        createdAt: serverTimestamp(),
      });
      alert("Blog added successfully!");
      setTitle("");
      setContent("");
      setCategory("");
    } catch (err) {
      console.error("Error adding blog:", err);
    }
  };

  return (
    <div>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Blog Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} required 
        />
        <textarea 
          placeholder="Blog Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} required 
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
