const fs = require("fs");

console.log("🚀 embed.js started");

function main() {
  try {
    const data = fs.readFileSync("./data/university.txt", "utf8");

    console.log("📄 File loaded");

    const chunks = data.split("\n").filter(Boolean);

    console.log("🧩 Chunks:", chunks);

    const vectors = chunks.map((text, index) => ({
      id: index,
      text: text,
      embedding: Array(5).fill(Math.random()) // temporary fake embedding
    }));

    fs.writeFileSync(
      "./data/vectors.json",
      JSON.stringify(vectors, null, 2)
    );

    console.log("✅ vectors.json created successfully!");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

main();