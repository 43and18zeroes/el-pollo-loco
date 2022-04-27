class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500;
        // Funktionsaufruf zur Bewegung der Wolken
        this.animate();
    }

    // Wolken werden mit 60fps bewegt
    animate() {
        this.moveLeft();
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


}