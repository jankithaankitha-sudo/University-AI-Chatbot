const express = require("express");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

console.log("🔥 SERVER FILE LOADED");

// ----------------------
// RAG ROUTE
// ----------------------
app.post("/chat", async (req, res) => {
  console.log("🔥 CHAT ROUTE WAS HIT");

  try {
    const question = req.body.message;

    // 1. Retrieve context
    const context = searchFallback(question);

    console.log("Question:", question);
    console.log("Context:", context);

    // 2. Call Ollama
    const response = await axios.post(
  "http://localhost:11434/api/generate",
  {
    model: "mistral",
    prompt: `
You are a STRICT university assistant.

RULES:
- Answer ONLY using Context below.
- If answer is missing, say: "Information not available in university database."
- Do NOT guess.


Context:
${context}

Question:
${question}

Answer in 1-2 lines:
    `,
    stream: false,
  }
);

    res.json({
      answer: response.data.response,
    });

  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err.response?.data || err.message);

    res.status(500).json({
      error: err.message,
    });
  }
});


// ----------------------
// SIMPLE RAG SEARCH
// ----------------------
function searchFallback(query) {
  const data = JSON.parse(fs.readFileSync("./data/vectors.json"));

  const q = query.toLowerCase().split(" ");

  let results = [];

  for (let item of data) {
    const text = item.text.toLowerCase();

    let score = 0;

    for (let word of q) {
      if (text.includes(word)) {
        score += 1;
      }
    }

    // boost important keywords
    if (text.includes("campus") && q.includes("campus")) score += 2;
    if (text.includes("library") && q.includes("library")) score += 2;
    if (text.includes("fee") && q.includes("fee")) score += 2;
    if (text.includes("timing") && (q.includes("time") || q.includes("timing"))) score += 3;

    if (score > 0) {
      results.push({ text: item.text, score });
    }
  }

  // sort best matches
  results.sort((a, b) => b.score - a.score);

  // RETURN TOP 5 (VERY IMPORTANT)
  return results.slice(0, 5).map(r => r.text).join("\n");
}
   
// ----------------------
// START SERVER
// ----------------------
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});