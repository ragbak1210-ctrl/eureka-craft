import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function AdminHome() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push("/auth"); // redirect to login if not logged in
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().role === "admin") {
        setIsAdmin(true);
      } else {
        router.push("/"); // not admin → redirect to home
      }
      setLoading(false);
    };

    checkAdmin();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {isAdmin ? (
        <ul>
          <li><a href="/admin/quizzes">Manage Quizzes</a></li>
          <li><a href="/admin/blogs">Manage Blogs</a></li>
        </ul>
      ) : (
        <p>Not authorized</p>
      )}
    </div>
  );
}
