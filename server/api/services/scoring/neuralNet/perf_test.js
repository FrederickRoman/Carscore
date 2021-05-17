const tf = require("@tensorflow/tfjs-node");
const dataFileName = "./data/carData.txt";
const encoding = require("./encoding");
const encode = require("./encode");
const { performance } = require("perf_hooks");

async function test() {
  try {
    const MODEL_DIRECTORY = "file://./neuralNet/carscoreNN/model.json";
    const model = await tf.loadLayersModel(MODEL_DIRECTORY);
    const { input, output } = encode(dataFileName, encoding);

    let totalInferenceTimeMs = 0;
    let numOfInferences = 0;
    input.forEach((sampleInput, i) => {
      const start = performance.now();
      model.predict(tf.tensor2d(sampleInput, [1, 24])).print();
      const end = performance.now();
      const inferenceTimeSample = end - start;
      totalInferenceTimeMs += inferenceTimeSample;
      numOfInferences++;  

      const sampleOutput = output[i];
      console.log("output", sampleOutput);
      console.log("--------------------------------");
    });

    const avgInferenceTimeMs =
      numOfInferences > 0 ? totalInferenceTimeMs / numOfInferences : 0;
    console.log("avgInferenceTimeMs", `${avgInferenceTimeMs} ms`);
  } catch (error) {
    console.log(error);
  }
}

test();
