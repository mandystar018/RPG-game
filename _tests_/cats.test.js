import { Cat } from '../src/js/cats.js'

describe('Cat', () => {
  let cat;
  beforeEach(() => {
    cat  = new Cat("Pipo", ["Brown", "White"], "nauty");
  });

test('should correctly create a cat name', () => {
  expect(cat.name).toEqual("Pipo");
  expect(cat.color).toEqual(["Brown", "White"]);
  expect(cat.obedience).toEqual("nauty");
  });
});