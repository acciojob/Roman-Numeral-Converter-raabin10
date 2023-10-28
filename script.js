function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  if (num < 1 || num > 100000) {
    return "Number out of range";
  }

  let romanNumeral = "";

  for (let key in obj) {
    while (num >= obj[key][1]) {
      romanNumeral += obj[key][0];
      num -= obj[key][1];
    }

    // Handle subtractive notation (e.g., 4 as IV or 9 as IX)
    if (key % 2 === 0) {
      let nextKey = Number(key) + 2;
      if (nextKey < 7 && num >= obj[key][1] - obj[nextKey][1]) {
        romanNumeral += obj[nextKey][0] + obj[key][0];
        num -= obj[key][1] - obj[nextKey][1];
      }
    }
  }

  return romanNumeral;
}

// Test cases
console.log(convertToRoman(14)); // Output: XXXVI

module.exports = convertToRoman;
