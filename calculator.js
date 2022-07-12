class Calculator {
  static add(c, d) {
    return c + d;
  }

  static substract(c, d) {
    return c - d;
  }

  static divide(c, d) {
    if (c > 0 && d > 0) {
      return c / d;
    } else {
      return undefined
    }
    
  }

  static multiply(c, d) {
    return c * d;
  }
}

module.exports = Calculator;