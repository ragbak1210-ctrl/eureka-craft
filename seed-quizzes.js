require("dotenv").config({ path: ".env.local" });

const admin = require("firebase-admin");
const fs = require("fs");

// Parse env var
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"),
  }),
});

const db = admin.firestore();

// Load quiz data
const quizzes = JSON.parse(fs.readFileSync("./seed-quizzes.json", "utf8"));

(async () => {
  try {
    for (const quiz of quizzes) {
      await db.collection("quizzes").add(quiz);
    }
    console.log("✅ Quizzes imported successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error importing quizzes:", error);
    process.exit(1);
  }
})();
