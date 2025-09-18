const generateContent = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  try {
    const aiReview = await generateContent(code); // call Gemini
    return res.json({ review: aiReview });
  } catch (err) {
    console.error("AI error:", err);
    return res.status(500).json({ error: "Failed to generate review" });
  }
};
