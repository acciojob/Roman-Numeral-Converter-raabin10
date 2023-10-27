
function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['XC', 90],
    6: ['L', 50],
    7: ['XL', 40],
    8: ['X', 10],
    9: ['IX', 9],
    10: ['V', 5],
    11: ['IV', 4],
    12: ['I', 1]
  };

  let romanNumeral = '';

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = Object.keys(obj)[i];
    const value = obj[key];
    const symbol = value[0];
    const weight = value[1];

    while (num >= weight) {
      romanNumeral += symbol;
      num -= weight;
    }
  }

  return romanNumeral;
}

console.log(convertToRoman(36));
