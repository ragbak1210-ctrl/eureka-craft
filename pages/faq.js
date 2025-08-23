import { useState } from "react";

const faqs = [
  {
    question: "What does Eureka Craft actually do?",
    answer:
      "We craft narrative-first branding, ghostwriting, and content systems for founders and teams. Our goal is to make your voice magnetic, not just visible."
  },
  {
    question: "What is the Clarity X-Ray?",
    answer:
      "The Clarity X-Ray™ is our diagnostic audit that uncovers hidden brand blindspots — from positioning to funnel friction. It’s a paid, deep-dive audit with actionable insights."
  },
  {
    question: "Do you only work with founders?",
    answer:
      "Founders are our sweet spot, but we also work with leadership teams and fast-scaling startups who want sharper messaging and narrative strategy."
  },
  {
    question: "What makes you different from agencies?",
    answer:
      "We don’t just create content — we build narrative systems. Think pods, not pyramids. Every piece is intentional, founder-led, and built for compounding recall."
  },
  {
    question: "How can I get started?",
    answer:
      "You can book a Clarity X-Ray session or jump straight into one of our ghostwriting and strategy retainers. Contact us via hello.eurekacraft@gmail.com."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          line-height: 1.6;
        }
        h1 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .faq-item {
          margin-bottom: 1rem;
          border-bottom: 1px solid #ddd;
          padding-bottom: 1rem;
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          padding: 0.5rem 0;
        }
        .faq-answer {
          margin-top: 0.5rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}
