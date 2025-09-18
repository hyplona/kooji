const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt) {
  const model = ai.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: `
You are a senior software engineer and expert code reviewer. Review code for correctness, security, maintainability, readability, and performance. Provide structured feedback with sections: Strengths, Issues/Concerns, Suggestions. Include corrected code snippets if needed.
`,
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generateContent;
