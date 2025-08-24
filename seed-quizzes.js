// seed-quizzes.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // We'll add this next

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const quizzes = [
  {
    category: "branding",
    question: "What is Eureka Craft’s core philosophy?",
    options: ["Sell products", "Craft belief", "Copy trends", "Push ads"],
    answer: "Craft belief",
  },
  {
    category: "strategy",
    question: "What does 'Clarity > Creativity' mean at Eureka Craft?",
    options: [
      "Creativity always comes first",
      "Clarity leads to stronger creativity",
      "Ignore clarity",
      "Clarity blocks creativity",
    ],
    answer: "Clarity leads to stronger creativity",
  },
];

async function seed() {
  for (let quiz of quizzes) {
    await db.collection("quizzes").add(quiz);
    console.log(`✅ Added: ${quiz.question}`);
  }
  console.log("🎉 Seeding complete!");
  process.exit();
}

seed();
