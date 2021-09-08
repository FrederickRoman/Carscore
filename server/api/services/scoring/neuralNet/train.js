const tf = require("@tensorflow/tfjs-node");
const dataFileName = "./data/carData.txt";
const encoding = require("./encoding");
const encode = require("./encode");

const { shuffle } = require("lodash");

const NUM_OF_FEATURES = 24;
const NUM_OF_CLASSES = 4;

function getRandSubarray(arr, n) {
  const subArray = [];
  const shuffledArray = shuffle(arr);
  for (let i = 0; i < n; i++) {
    subArray.push(shuffledArray[i]);
  }
  return subArray;
}

function defineModel() {
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
    loss: tf.losses.softmaxCrossEntropy,
    metrics: tf.metrics.categoricalAccuracy,
  });
  model.summary();
  return model;
}

async function train(input, output) {
  try {
    const model = defineModel();

    const NUM_OF_PASSES_ON_BALANCED_SAMPLES = 10;
    for (let j = 0; j < NUM_OF_PASSES_ON_BALANCED_SAMPLES; j++) {
      const balanced_samples_xs = [];
      const balanced_samples_ys = [];
      for (let i = 0; i < NUM_OF_CLASSES; i++) {
        balanced_samples_xs.push(getRandSubarray(input[i], 65));
        balanced_samples_ys.push(getRandSubarray(output[i], 65));
      }
      const xs = tf.tensor2d(balanced_samples_xs.flat(), [65 * 4, 24]);
      const ys = tf.tensor2d(balanced_samples_ys.flat(), [65 * 4, 4]);
      const config = {
        shuffle: true,
        epochs: 100,
      };
      await model.fit(xs, ys, config);
    }

    const MODEL_DIRECTORY = "file://./carscoreNN";
    await model.save(MODEL_DIRECTORY);
  } catch (error) {
    console.log(error);
  }
}

const { input, output } = encode(dataFileName, encoding);

console.log("input", input);
console.log("output", output);

const input_class_buckets = [[], [], [], []];
const output_class_buckets = [[], [], [], []];

output.forEach((out, i) => {
  const index_class = out.indexOf(1);
  input_class_buckets[index_class].push(input[i]);
  output_class_buckets[index_class].push(output[i]);
});

// console.log(input_class_buckets);
console.log(input_class_buckets.length);
console.log(input_class_buckets[0].length);

train(input_class_buckets, output_class_buckets);
