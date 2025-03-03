const { Player } = require("../src/Player");

describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player("Juan");
  });

  test("Must initialise with a name", () => {
    expect(player.name).toBe("Juan");
  });

  test("They must be able to choose an option", () => {
    player.chooseShape("rock");
    expect(player.shape).toBe("rock");
  });
});
