const admin = require("firebase-admin");
const fs = require("fs");

// Load the service account key JSON file
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin SDK with credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Load quiz data
const quizzes = JSON.parse(fs.readFileSync("./seed-quizzes.json", "utf8"));

// Insert quizzes
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
