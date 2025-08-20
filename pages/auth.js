// pages/auth.js
import { useEffect, useState } from "react";
import { auth, signInWithGoogle, logOut } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {!user ? (
        <>
          <h1>Welcome! Please sign in</h1>
          <button 
            onClick={signInWithGoogle} 
            style={{ padding: "10px 20px", marginTop: "20px", background: "#4285F4", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <h1>Hello, {user.displayName} 👋</h1>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="profile" style={{ borderRadius: "50%", marginTop: "10px" }} />
          <button 
            onClick={logOut} 
            style={{ padding: "10px 20px", marginTop: "20px", background: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
