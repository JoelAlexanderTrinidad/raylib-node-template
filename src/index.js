const Game = require('./core/Game');
const GameScene = require('./scenes/GameScene');
const Player = require('./entities/Player');
const RenderSystem = require('./systems/RenderSystem');

// Configuración inicial
const game = new Game();
game.init();

// Configurar escena principal
const gameScene = new GameScene();
const player = new Player(100, 100);

// Añadir sistemas
gameScene.addSystem(new RenderSystem());

// Añadir entidades
gameScene.addEntity(player);

// Configurar el juego
game.addScene('main', gameScene);
game.setScene('main');

// Iniciar el bucle del juego
game.run();