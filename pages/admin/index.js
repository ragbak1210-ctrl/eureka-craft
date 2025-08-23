import { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  // 🔐 Check if user is admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // ➕ Add new question block
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  // ❌ Remove a question
  const removeQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  // ✏️ Update question text
  const updateQuestionText = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  // ✏️ Update options
  const updateOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  // ✅ Update correct answer
  const updateCorrectAnswer = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].correctAnswer = value;
    setQuestions(updated);
  };

  // 🚀 Submit whole quiz
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "quizzes"), {
        title,
        questions,
        createdBy: user?.email,
        createdAt: new Date(),
      });
      alert("Quiz saved successfully!");
      setTitle("");
      setQuestions([{ question: "", options: ["", "", "", ""], correctAnswer: "" }]);
    } catch (err) {
      console.error(err);
      alert("Error saving quiz: " + err.message);
    }
  };

  if (!user) return <p>Please log in</p>;
  if (role !== "admin") return <p>Access denied: Admins only</p>;

  return (
    <div>
      <h1>Admin Quiz Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {questions.map((q, qIndex) => (
          <div key={qIndex} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>Question {qIndex + 1}</h3>
            <input
              type="text"
              placeholder="Enter question"
              value={q.question}
              onChange={(e) => updateQuestionText(qIndex, e.target.value)}
              required
            />

            {q.options.map((opt, optIndex) => (
              <input
                key={optIndex}
                type="text"
                placeholder={`Option ${optIndex + 1}`}
                value={opt}
                onChange={(e) => updateOption(qIndex, optIndex, e.target.value)}
                required
              />
            ))}

            <input
              type="text"
              placeholder="Correct Answer"
              value={q.correctAnswer}
              onChange={(e) => updateCorrectAnswer(qIndex, e.target.value)}
              required
            />

            {questions.length > 1 && (
              <button type="button" onClick={() => removeQuestion(qIndex)}>
                Remove Question
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addQuestion}>
          ➕ Add Another Question
        </button>
        <br />
        <button type="submit">💾 Save Quiz</button>
      </form>
    </div>
  );
}
