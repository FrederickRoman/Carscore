const tf = require("@tensorflow/tfjs-node");
const dataFileName = "./data/carData.txt";
const encoding = require("./encoding");
const encode = require("./encode");

async function train(input, output) {
  try {
    const NUM_OF_FEATURES = 24;
    const NUM_OF_CLASSES = 4;

    const model = tf.sequential();
    model.add(
      tf.layers.dense({
        units: 7,
        activation: "sigmoid",
        inputShape: [NUM_OF_FEATURES],
      })
    );
    model.add(
      tf.layers.dense({
        units: NUM_OF_CLASSES,
        activation: "softmax",
      })
    );
    model.compile({
      optimizer: tf.train.adam(),
      loss: "meanSquaredError",
      metrics: ["accuracy"],
    });
    model.summary();

    const NUM_OF_SAMPLES = 1728;
    const INPUT_SIZE = [NUM_OF_SAMPLES, NUM_OF_FEATURES];
    const OUTPUT_SIZE = [NUM_OF_SAMPLES, NUM_OF_CLASSES];
    const xs = tf.tensor2d(input, INPUT_SIZE);
    const ys = tf.tensor2d(output, OUTPUT_SIZE);

    const epochs = 1000;
    await model.fit(xs, ys, { epochs });
    
    const MODEL_DIRECTORY = "file://./carscoreNN";
    await model.save(MODEL_DIRECTORY);
  } catch (error) {
    console.log(error);
  }
}

const { input, output } = encode(dataFileName, encoding);
train(input, output);
