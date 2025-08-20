// pages/auth.js
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../lib/firebase"; // make sure lib/firebase.js exists and exports `app`

const AuthPage = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // login
  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // signup
  const handleSignup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 40 }}>
      <h1>Auth Page</h1>

      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default AuthPage;
