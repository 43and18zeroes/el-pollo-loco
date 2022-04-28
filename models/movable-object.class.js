class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    // Variable für Spiegelung eines Objekts
    otherDirection = false;

    loadImage(path) {
        // Image() muss nicht definiert werden, da es von JS von
        // Haus aus zur Verfügung gestellt wird.
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        // erreicht this.currentImage den Wert 6 wird i durch die Modulo Rechnung
        // auf 0 gesetzt: Selbsterstellte Endlosschleife
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    // Hier wird auf "function" vor "moveUp()" bewusst verzichtet,
    // da es sich bei einer class um etwas relativ Modernes handelt.
    // In moderneren Elementen kann darauf verzichtet werden. 
    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}