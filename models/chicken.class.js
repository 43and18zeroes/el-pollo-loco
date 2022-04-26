class Chicken extends MovableObject {
    // Die y Achse, welche für alle in movable-objects.class.js festgelegt wurde,
    // wird hier überschrieben, damit die chicken etwas besser ins Bild passen
    y = 290;

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 200 + Math.random() * 500; // Immer Zahl zwischen 200 und 700
    }


    chickenSound() {

    }
}