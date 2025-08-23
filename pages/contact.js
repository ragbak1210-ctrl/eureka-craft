import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For now, just simulate submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>
        Have a question, project, or collaboration in mind? <br />
        Drop us a message below or email us at{" "}
        <a href="mailto:hello.eurekacraft@gmail.com">hello.eurekacraft@gmail.com</a>.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="thank-you">✅ Thank you for reaching out! We’ll get back soon.</p>
      )}

      <style jsx>{`
        .container {
          max-width: 700px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        h1 {
          margin-bottom: 1rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        input,
        textarea {
          padding: 0.8rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        button {
          padding: 0.8rem;
          font-size: 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background: #0059c1;
        }
        .thank-you {
          margin-top: 2rem;
          font-weight: bold;
          color: green;
        }
      `}</style>
    </div>
  );
}
