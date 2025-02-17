test('comparing numbers', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // Es mayor a 3?
  expect(value).toBeGreaterThanOrEqual(3.5); // Es mayor o igual a 3.5?
  expect(value).toBeLessThan(5); // Es menor que 5?
  expect(value).toBeLessThanOrEqual(4.5); // Es menor o igual a 4.5?

  // ToBe y toEqual son equivalentes para números.
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('comparing float', () => {
  const value = 3.5 + 4.2;
  // Se usa toBeCloseTo para evitar errores por redondeos en numeros quebrados usando toEqual.
  expect(value).toBeCloseTo(7.7);
});

function formComplete() {
  throw new Error('You are not completed the form');
}

test('exception error', () => {
  // Probar si la función arroja error cuando se llama.
  expect(() => formComplete()).toThrow();
  expect(() => formComplete()).toThrow(Error);

  // Podemos usar el texto del error o una parte.
  expect(() => formComplete()).toThrow('You are not completed the form');
  expect(() => formComplete()).toThrow(/not completed/);
});
