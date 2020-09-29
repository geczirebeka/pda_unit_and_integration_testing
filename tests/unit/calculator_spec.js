var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add numbers', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  })

  it('it should be able to subtract numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('it should be able to multiply numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('it should be able to divide numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it('it should be able click a number', function() {
    calculator.numberClick(6);
    calculator.numberClick(2);
    calculator.numberClick(8);
    assert.equal(628, calculator.runningTotal);
  })

  it('it should be able to chain multiple operations', function() {
    calculator.numberClick(20);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal);
  })

  it('it should be able to clear running total without affecting calculation', function() {
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(11, calculator.runningTotal);
  })


});
