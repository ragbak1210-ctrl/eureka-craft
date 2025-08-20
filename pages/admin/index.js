// pages/admin/index.js
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../lib/firebase"; // adjust path carefully

const AdminDashboard = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Admin Dashboard</h1>
        <p>You must be logged in to view this page.</p>
        <a href="/auth">
          <button>Go to Login</button>
        </a>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard; 
