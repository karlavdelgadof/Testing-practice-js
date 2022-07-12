const Calculator = require('./calculator');

describe('Calculator.add', () => {
  test.skip('add positive numbers', () => {
    expect(Calculator.add(6, 8)).toEqual(14);
  });

  test.skip('add with zero', () => {
    expect(Calculator.add(4, 0)).toEqual(4)
  })

  test.skip('add negative numbers', () => {
    expect(Calculator.add(-5, -8)).toEqual(-13)
  })
});


describe('Calculator.substract', () => {
  test.skip('substract positive numbers', () => {
    expect(Calculator.substract(6, 8)).toEqual(-2);
  });

  test.skip('substract zero', () => {
    expect(Calculator.substract(4, 0)).toEqual(4)
  })

  test.skip('substract negative numbers', () => {
    expect(Calculator.substract(-5, -8)).toEqual(3)
  })
});

describe('Calculator.multiply', () => {
  test.skip('multiply positive', () => {
    expect(Calculator.multiply(8, 2)).toEqual(16);
  });

  test.skip('multiply zero', () => {
    expect(Calculator.multiply(4, 0)).toEqual(0)
  })

  test.skip('multiply negative', () => {
    expect(Calculator.multiply(-5, -2)).toEqual(10)
  })

});

describe('Calculator.divide', () => {
  test.skip('divide even', () => {
    expect(Calculator.divide(8, 2)).toEqual(4);
  });

  test.skip('divide zero', () => {
    expect(Calculator.divide(4, 0)).toEqual(undefined)
  })

  test.skip('divide odd', () => {
    expect(Calculator.divide(5, 2)).toEqual(2.5)
  })

  test.skip('divide fractions', () => {
    expect(Calculator.divide((1/2), (2/4))).toEqual(1)
  })
});


