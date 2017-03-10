var assert = require("/vagrant/MochaChai/node_modules/chai").assert;
var isValidNumber = require("/vagrant/w1d5/luhn");

describe("Luhn Algorithm", function() {
  it("should return true if it satisfies the Luhn Algorithm", function() {
    var number = 79927398713;
    var result = isValidNumber(number);
    assert.isTrue(result);
  });

  it("should return false if it does not satisfy the Luhn Algorithm", function() {
    var number = 79927398716;
    assert.isFalse(isValidNumber(number));
  });

  it("should return true if it satisfies the Luhn Algorithm", function() {
    assert.isTrue(isValidNumber(49927398716));
  });

  it("should return false if it does not satisfy the Luhn Algorithm", function() {
    assert.isFalse(isValidNumber(49927398718));
  });
});

