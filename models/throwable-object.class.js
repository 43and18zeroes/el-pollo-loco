class ThrowableObject extends MovableObject {

    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = 100;
        this.y = 100;
        this.throw(100, 150);
    }

    throw (x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
    }
}