const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 📚 RAG DATA
const docs = [
  "MCA fee is ₹1,50,000 per year.",
  "MBA fee is ₹2,00,000 per year.",
  "Hostel fee is ₹80,000 per year.",
  "Library timing is 9 AM to 5 PM.",
  "Admission requires 60% in graduation."
];

// 🔎 SIMPLE RETRIEVAL
function retrieve(query) {
  query = query.toLowerCase();

  for (let d of docs) {
    if (query.includes(d.split(" ")[0].toLowerCase())) {
      return d;
    }
  }

  return docs[0];
}

// 🚀 IMPORTANT ROUTE (FIX 404 ERROR)
app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    const context = retrieve(message);

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "mistral",
      prompt: `
You are a university assistant.

Context:
${context}

Question:
${message}

Answer clearly and shortly.
      `,
      stream: false
    });

    res.json({
      answer: response.data.response,
      context
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🚀 START SERVER
app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});