const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
  const { code, language } = req.body;
  if (!code) return res.status(400).send("code is required");
  try {
    const response = await aiService(code, language);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong while reviewing the code");
  }
};