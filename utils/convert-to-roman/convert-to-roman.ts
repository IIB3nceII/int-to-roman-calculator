const convertToRoman = (rawValue: number): string => {
  if (rawValue < 1 || rawValue > 1000)
    return "Input value must be between 0 and 1000!";

  if (!Number.isInteger(rawValue)) return "Input value must be an integer!";

  let romanValue = "";

  const lookupTable: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (const key in lookupTable) {
    console.log(lookupTable[key]);
  }

  return romanValue;
};

export default convertToRoman;
