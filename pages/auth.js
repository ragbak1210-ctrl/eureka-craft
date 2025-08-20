import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Firebase Auth Test</h1>

      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: "block", margin: "0.5rem 0" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", margin: "0.5rem 0" }}
          />
          <button onClick={handleSignup}>Sign Up</button>
          <button onClick={handleLogin} style={{ marginLeft: "1rem" }}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
