class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;

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

    // Hier wird auf "function" vor "moveUp()" bewusst verzichtet,
    // da es sich bei einer class um etwas relativ Modernes handelt.
    // In moderneren Elementen kann darauf verzichtet werden. 
    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}