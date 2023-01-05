const convertToRoman = (rawValue: number): string => {
  if (rawValue < 1 || rawValue > 1000)
    return "Input value must be between 0 and 1000!";

  if (!Number.isInteger(rawValue)) return "Input value must be an integer!";

  return `${rawValue}`;
};

export default convertToRoman;
