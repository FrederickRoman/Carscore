const fs = require("fs");
const path = require("path");

function encode(dataFileName, encoding) {
  const input = [];
  const output = [];
  try {
    const dataPath = path.join(__dirname, dataFileName);
    const data = fs.readFileSync(dataPath, "utf8");
    const lines = data.split("\n");
    lines.forEach((line) => {
      const v = line.split(",");
      const [features, label] = [v.slice(0, -1), v.slice(-1)[0]];
      const encodedFeatures = features.map((feat) => encoding[feat]).flat();
      const encodedLabels = encoding[label.replace("\r", "")];
      if (encodedFeatures.length && encodedLabels) {
        // console.log("encodedFeatures", encodedFeatures);
        // console.log("encodedLabels", encodedLabels);
        input.push(encodedFeatures);
        output.push(encodedLabels);
      }
    });
    return { input, output };
  } catch (error) {
    console.log(error);
    return { input: null, output: null };
  }
}

// const { input, output } = encode(dataFileName, encoding);

// console.log("input", input);
// console.log("output", output);

module.exports = encode;


