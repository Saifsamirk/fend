import { checkURL } from "../src/client/js/urlChecker";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the url check functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Is the link entered valid or not?!", () => {
    expect(checkURL("https://www.google.com")).toBe(true);
  });
});
