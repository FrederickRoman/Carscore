const ScoringService = require("../services/scoring/ScoringService");

exports.score_detail = async (req, res) => {
    const { car } = req.body;
    const score = await ScoringService.scoreOne(car);
    res.status(200).json({ score });
};
