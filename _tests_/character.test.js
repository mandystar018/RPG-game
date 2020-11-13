import { Character } from '../src/js/character.js';

  describe('Character', () => {
    let character;
    beforeEach(() => {
      character  = new Character("Sara", "70");
    })
  test('should correctly create a characters name', () => {
    expect(character.name).toEqual("Sara");
    expect(character.age).toEqual("70");
  });
});