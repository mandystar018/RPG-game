import { Cat } from '../src/js/cats.js'

describe('Cat', () => {
  let cat;
  beforeEach(() => {
    cat  = new Cat();
  });
test('should correctly create a cat name', () => {
  expect(cat.name).toEqual("Pipo");
});
});