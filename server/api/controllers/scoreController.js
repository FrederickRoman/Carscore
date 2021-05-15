const ScoringService = require("../services/scoring/ScoringService");

exports.score_detail = async (req, res) => {
    console.log("I'm at score detail")
    const { car } = req.body;
    console.log(car);
    const score = ScoringService.readOne(car);
    res.status(200).json({ score });
};
