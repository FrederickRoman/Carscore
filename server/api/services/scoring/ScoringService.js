const tf = require("@tensorflow/tfjs-node");
const encoding = require("./neuralNet/encoding")
const MODEL_DIRECTORY = "file://./server/api/services/scoring/neuralNet/carscoreNN/model.json";

class Preprocessing {
  static car2vec(car) {
    const { buying, maint, doors, persons, lug_boot, safety } = car;
    const features = [buying, maint, doors, persons, lug_boot, safety];
    const encodedFeatures = features.map((feat) => encoding[feat]).flat();
    return encodedFeatures;
  }
}

class Postprocessing {
  static vec2score(outputVec) {
    const getIndexOfMax = arr => arr.indexOf(Math.max(...arr));
    return getIndexOfMax(outputVec);
  }
}

class ScoringService {
  static async scoreOne(car) {
    try {
      const inputFeatureVector = Preprocessing.car2vec(car);
      const inputSize = [1, inputFeatureVector.length];
      const inputFeaturesTensor = tf.tensor2d(inputFeatureVector, inputSize);
      const model = await tf.loadLayersModel(MODEL_DIRECTORY);
      const outputPredictionTensor = model.predict(inputFeaturesTensor);
      const outputPredictionVector = await outputPredictionTensor.data();
      const score = Postprocessing.vec2score(outputPredictionVector)
      return score;
    } catch (error) {
      console.log("cwd",  process.cwd())
      console.log(error)
    }

  }
}

module.exports = ScoringService;
