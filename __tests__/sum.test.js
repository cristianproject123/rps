// Function to be tested
function sum(a, b) {
    return a + b;
  }
  
  module.exports = sum;
  
  // Test with Jest
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  