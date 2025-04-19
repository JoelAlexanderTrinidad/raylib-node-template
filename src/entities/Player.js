const RAY = require('raylib');

class Player {
    constructor(x, y) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.size = { width: 32, height: 32 };
        this.speed = 200;
        this.color = RAY.RED;
    }

    update(deltaTime) {
        // Lógica de movimiento
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
    }

    render() {
        RAY.DrawRectangle(
            this.position.x, this.position.y,
            this.size.width, this.size.height,
            this.color
        );
    }
}

module.exports = Player;