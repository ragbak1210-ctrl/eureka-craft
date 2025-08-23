// pages/quiz.js
import { useState } from "react";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: "q1", text: "What’s your primary growth challenge?", options: ["Visibility", "Leads", "Conversions"] },
    { id: "q2", text: "What best describes your brand stage?", options: ["Early-stage", "Scaling", "Established"] },
    { id: "q3", text: "Which service interests you most?", options: ["Ghostwriting", "SEO & Blogs", "Clarity X-Ray", "Outreach"] }
  ];

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [questions[step].id]: option });
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      console.log("Quiz complete:", answers);
      alert("Thank you! Crafty will analyze your inputs.");
    }
  };

  return (
    <section className="container">
      <h1>Brand Clarity Quiz</h1>
      <p>
        Take this short quiz and let <b>Crafty</b> highlight your blindspots
        and suggest fixes tailored for your brand.
      </p>

      {step < questions.length ? (
        <div className="quiz-card">
          <h2>{questions[step].text}</h2>
          <ul>
            {questions[step].options.map((opt) => (
              <li key={opt}>
                <button onClick={() => handleAnswer(opt)}>{opt}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading Crafty’s insights...</p>
      )}
    </section>
  );
}
