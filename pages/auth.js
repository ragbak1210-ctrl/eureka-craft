// pages/auth.js
import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // login | signup | reset
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("✅ Logged in!");
      } else if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("✅ Account created!");
      } else if (mode === "reset") {
        await sendPasswordResetEmail(auth, email);
        setMessage("📩 Reset link sent!");
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>{mode === "login" ? "Login" : mode === "signup" ? "Sign Up" : "Reset Password"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        {mode !== "reset" && (
          <>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br /><br />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <div style={{ marginTop: "20px" }}>
        {mode !== "login" && <button onClick={() => setMode("login")}>Go to Login</button>}
        {mode !== "signup" && <button onClick={() => setMode("signup")}>Go to Signup</button>}
        {mode !== "reset" && <button onClick={() => setMode("reset")}>Forgot Password?</button>}
      </div>
    </div>
  );
}
