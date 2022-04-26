class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // Immer Zahl zwischen 300 und 600
        // Funktionsaufruf zur Bewegung der Wolken
        this.animate();
    }

    // Wolken werden mit 60fps bewegt
    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }


}