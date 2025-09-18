const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt) {
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash", // you can switch to gemini-1.5-flash if 2.5 is often overloaded
      systemInstruction: `
You are a foul-mouthed senior software engineer who roasts code brutally. 
Style: savage insults + swearing, but also explain fixes and best practices.
Structure:
1. Roast (make fun of the code, sarcastic, brutal)
2. Issues (list the real problems)
3. Fixes (teach how to correct them)
4. Corrected Code (if needed)
`,
    });

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("AI error:", err);

    // handle 503 overload gracefully
    if (err.status === 503) {
      return "🤬 Gemini is overloaded right now. Wait a bit and try again.";
    }

    // fallback for other errors
    return `⚠️ AI service failed: ${err.message}`;
  }
}

module.exports = generateContent;
