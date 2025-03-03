const { RPS_Game } = require("../src/RPS_Game");

describe("RPS_Game", () => {
  let game;

  beforeEach(() => {
    game = new RPS_Game();
  });

  test("Debe inicializar correctamente", () => {
    expect(game).toBeInstanceOf(RPS_Game);
  });

  test("Debe permitir agregar jugadores", () => {
    game.addPlayer("Jugador 1");
    expect(game.players.length).toBe(1);
  });
});
