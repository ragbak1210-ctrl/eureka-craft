import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expanded, setExpanded] = useState(null);

  // Fetch quizzes from Firestore
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        let q = collection(db, "quizzes");

        if (selectedCategory !== "all") {
          q = query(q, where("category", "==", selectedCategory));
        }

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, [selectedCategory]);

  // Toggle expand/collapse for each quiz question
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Eureka Craft Quiz</h1>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="branding">Branding</option>
          <option value="content">Content</option>
          <option value="seo">SEO</option>
        </select>
      </div>

      {/* Quiz List */}
      {quizzes.length === 0 ? (
        <p>No quizzes found.</p>
      ) : (
        quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="border rounded p-4 mb-4 bg-white shadow"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleExpand(quiz.id)}
            >
              <h2 className="text-xl font-semibold">{quiz.question}</h2>
              <span>{expanded === quiz.id ? "▲" : "▼"}</span>
            </div>

            {expanded === quiz.id && (
              <div className="mt-4">
                {quiz.options.map((opt, index) => (
                  <div key={index} className="mb-2">
                    <label>
                      <input
                        type="radio"
                        name={`quiz-${quiz.id}`}
                        value={opt}
                        className="mr-2"
                      />
                      {opt}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
