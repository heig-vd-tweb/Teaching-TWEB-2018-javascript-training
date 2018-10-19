function arraySum(array) {
  // Reduce the array to sum its elements.
  // We need to cast the elements of the array into numbers, in order to avoid string concatenation.
  return array.reduce((acc, value) => acc + Number(value), 0);
}

function nonUniqueElements(data) {
  // Filter the array by removing the elements that appear twice or more.
  return data.filter(v => data.indexOf(v) !== data.lastIndexOf(v));
}

// Basic ugly anti-JS solution.
function longRepeat(line) {
  let length = 0;
  let count = 1;
  let lastChar;
  for(let char of line) {
      if (char === lastChar) count++;
      else count = 1;
      length = Math.max(count, length);
      lastChar = char;
  }
  return length;
}

// A better solution that uses all the last improvements of JS.
function longRepeat2(line) {
  let max = 0;
  let count = 1;

  [...line].forEach((char, index, chars) => {
    const lastChart = chars[index - 1];
    if (char === lastChart) count ++;
    else count = 1
    max = Math.max(count, max);
  }, 0)

  return max;
}

// The killer solution, with regex.
function longRepeat3(line) {
  // The regex splits the repeating sequences into an array, then sorts the elements of this array by length and returns the first one.
  return (!line) ? 0 : line.match(/(.)\1*/g).sort((a, b) => b.length - a.length)[0].length;
}

module.exports = {
  nonUniqueElements,
  longRepeat,
  arraySum,
};
