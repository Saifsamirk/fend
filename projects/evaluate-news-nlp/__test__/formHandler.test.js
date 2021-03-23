import { handleSubmit } from "../src/client/js/formHandler";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Does the function return data or not?!", () => {
    // expect.assertions(1);
    handleSubmit() &&
      handleSubmit().then((data) => {
        expect(data).toBeDefined();
      });
  });
});
