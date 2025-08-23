// pages/test-db.js
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TestDB() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "quizzes"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQuizzes(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Quizzes from Firestore</h1>
      {quizzes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        quizzes.map(quiz => (
          <div key={quiz.id}>
            <h2>{quiz.title}</h2>
            <p>Category: {quiz.category}</p>
            <ul>
              {quiz.questions.map((q, i) => (
                <li key={i}>{q.q} — <b>{q.a}</b></li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
