const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize client
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Helper to generate content
async function generateContent(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

// Example run (only if you want to test directly in this file)
async function main() {
  try {
    const text = await generateContent("Explain how AI works in a few words");
    console.log(text);
  } catch (err) {
    console.error("AI error:", err);
  }
}

// Call main if this file is run directly
if (require.main === module) {
  main();
}

module.exports = generateContent;
