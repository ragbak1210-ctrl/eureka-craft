import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ManageQuizzes() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "quizzes"), {
        title,
        category,
        difficulty,
        createdAt: serverTimestamp(),
        questions: [
          {
            question,
            options,
            answer,
          },
        ],
      });
      alert("Quiz added successfully!");
      setTitle("");
      setCategory("");
      setDifficulty("easy");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setAnswer("");
    } catch (err) {
      console.error("Error adding quiz:", err);
    }
  };

  return (
    <div>
      <h1>Add Quiz</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Quiz Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} required 
        />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <h3>Question</h3>
        <input 
          type="text" 
          placeholder="Question" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} required 
        />
        {options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[i] = e.target.value;
              setOptions(newOptions);
            }}
            required
          />
        ))}
        <input 
          type="text" 
          placeholder="Correct Answer" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} required 
        />
        <button type="submit">Add Quiz</button>
      </form>
    </div>
  );
}
