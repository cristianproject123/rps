const { functionOne, functionTwo } = require("../src/functions");

describe("Game functions", () => {
  test("functionOne should return a number greater than 0", () => {
    expect(functionOne(5)).toBeGreaterThan(0);
  });

  test("functionTwo should return Draw if the options are equal", () => {
    expect(functionTwo("rock", "rock")).toBe("Draw");
  });
});
