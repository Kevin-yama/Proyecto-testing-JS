const { sum, multiply, divide } = require('./02-math');

describe('Test for math', () => {
  describe('test for sum',() => {
    test('add 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });  
  })

  describe('test for multiply',() => {
    test('should  be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  })

  describe('test for divide', () => {
    test('should divide', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);
      const rta2 = divide(6, 6);
      expect(rta2).toBe(1);
      const rta3 = divide(8, 2);
      expect(rta3).toBe(4);
    });
    
    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  })
})


