const  RAY = require("raylib")

class Game {
    constructor() {
        this.scenes = {};
        this.currentScene = null;
        this.isRunning = false;
        this.config = {
            width: 800,
            height: 600,
            title: "Mi Juego 2D"
        };
    }

    init() {
        RAY.InitWindow(this.config.width, this.config.height, this.config.title);
        RAY.SetTargetFPS(60);
        this.isRunning = true;
    }

    addScene(name, scene) {
        this.scenes[name] = scene;
        scene.game = this;
    }

    setScene(name) {
        if (this.scenes[name]) {
            this.currentScene = this.scenes[name];
            this.currentScene.load();
        }
    }

    run() {
        while (!RAY.WindowShouldClose() && this.isRunning) {
            this.update();
            this.render();
        }
        
        this.currentScene?.unload();
        RAY.CloseWindow();
    }

    update() {
        this.currentScene?.update(RAY.GetFrameTime());
    }

    render() {
        RAY.BeginDrawing();
        RAY.ClearBackground(RAY.BLACK);
        this.currentScene?.render();
        RAY.EndDrawing();
    }
}

module.exports = Game;