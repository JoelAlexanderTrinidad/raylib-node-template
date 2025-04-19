class GameScene {
    constructor() {
        this.entities = [];
        this.systems = [];
    }

    load() {
        // Cargar recursos y configurar la escena
        console.log("Cargando escena de juego...");
    }

    unload() {
        // Liberar recursos
        console.log("Descargando escena de juego...");
    }

    update(deltaTime) {
        // Actualizar todos los sistemas
        this.systems.forEach(system => system.update(this.entities, deltaTime));
    }

    render() {
        // Renderizar la escena
        this.systems.forEach(system => {
            if (system.render) {
                system.render(this.entities);
            }
        });
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    addSystem(system) {
        this.systems.push(system);
    }
}

module.exports = GameScene;