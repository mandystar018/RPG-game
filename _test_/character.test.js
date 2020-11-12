import { Character } from '../src/js/character.js';

  describe('Character', () => {
    let character;
    beforeEach(() => {
      character  = new Character("Witch");
    })
  test('should correctly create a characters name', () => {
    expect(character.name).toEqual("Witch");
  });
});