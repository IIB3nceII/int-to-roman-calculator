import { convertToRoman } from "../../utils";

describe("convertToRoman utility function tests.", () => {
  test("Test for too small input.", () => {
    expect(convertToRoman(0)).toBe("Input value must be between 0 and 1000!");
  });

  test("Test for not valid integer.", () => {
    expect(convertToRoman(5.2)).toBe("Input value must be an integer!");
  });

  test("Test for valid input.", () => {
    expect(convertToRoman(10)).toBe("X");
  });
});
