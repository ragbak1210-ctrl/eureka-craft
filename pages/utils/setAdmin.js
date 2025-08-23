import { useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function SetAdmin() {
  useEffect(() => {
    const makeAdmin = async () => {
      if (!auth.currentUser) return;
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, { role: "admin" });
      alert("You are now an admin!");
    };
    makeAdmin();
  }, []);

  return <p>Setting your role to admin...</p>;
}
