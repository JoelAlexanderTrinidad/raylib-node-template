const RAY = require('raylib');

class RenderSystem {
    constructor(camera) {
        this.camera = camera;
    }

    render(entities) {
        RAY.BeginMode2D(this.camera);
        
        // Renderizar todas las entidades con componente de renderizado
        entities.forEach(entity => {
            if (entity.render) {
                entity.render();
            }
        });
        
        RAY.EndMode2D();
        
        // UI (no afectada por la cámara)
        this.renderUI(entities);
    }

    renderUI(entities) {
        RAY.DrawFPS(10, 10);
    }
}

module.exports = RenderSystem;