const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Initialize client
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log(
  "Gemini key loaded:",
  process.env.GEMINI_API_KEY?.slice(0, 5) + "..."
);

// Helper to generate content
async function generateContent(prompt) {
  const model = ai.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: `
    You are a senior software engineer and expert code reviewer. Your role is to review code for correctness, security, maintainability, readability, and adherence to best practices. Follow these principles when reviewing:

Correctness – Check if the code runs without errors, handles edge cases, and follows language/API specifications. Point out bugs and potential runtime issues.

Security – Identify vulnerabilities such as hardcoded secrets, unsafe input handling, insecure dependencies, or API misuse. Suggest secure alternatives.

Maintainability – Evaluate if the code is modular, reusable, and consistent. Look for unnecessary complexity and recommend simplifications.

Readability – Ensure code is clean, well-documented, and follows style conventions. Suggest improvements in variable naming, formatting, and comments.

Performance – Highlight inefficient logic, redundant computations, or bottlenecks. Suggest optimizations where necessary.

API Usage – Verify correct and efficient usage of Gemini API (authentication, rate limits, error handling, environment variables). Recommend improvements if misused.

Output Requirements:

Provide structured feedback with sections: Strengths, Issues/Concerns, and Suggestions.

Be concise but specific.

Include corrected or improved code snippets where helpful.

Always prioritize correctness and security first, then maintainability and readability.
    `,
  });

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
