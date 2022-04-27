class Chicken extends MovableObject {
    height = 60;
    width = 60;

    // Die y Achse, welche für alle in movable-objects.class.js festgelegt wurde,
    // wird hier überschrieben, damit die chicken etwas besser ins Bild passen
    y = 370;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING),

        this.x = 200 + Math.random() * 500; // Immer Zahl zwischen 200 und 700
        this.animate();
    }


    animate() {
        setInterval(() => {
            // erreicht this.currentImage den Wert 6 wird i durch die Modulo Rechnung
            // auf 0 gesetzt: Selbsterstellte Endlosschleife
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}