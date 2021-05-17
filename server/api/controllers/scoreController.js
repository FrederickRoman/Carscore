const ScoringService = require("../services/scoring/ScoringService");

exports.score_detail = async (req, res) => {
    console.log("I'm at score detail")
    const { car } = req.body;
    console.log(car);
    const score = await ScoringService.scoreOne(car);
    res.status(200).json({ score });
};
