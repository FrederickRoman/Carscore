const encoding = {
  low: [1, 0, 0, 0],
  med: [0, 1, 0, 0],
  high: [0, 0, 1, 0],
  vhigh: [0, 0, 0, 1],
  small: [1, 0, 0, 0],
  big: [0, 0, 1, 0],
  2: [1, 0, 0, 0],
  3: [0, 1, 0, 0],
  4: [0, 0, 1, 0],
  5: [0, 0, 0, 1],
  "5more": [0, 0, 0, 1],
  more: [0, 0, 0, 1],
  unacc: [1, 0, 0, 0],
  acc: [0, 1, 0, 0],
  good: [0, 0, 1, 0],
  vgood: [0, 0, 0, 1],
};

module.exports = encoding;
