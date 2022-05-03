class World {

    // Variablen definiert man in classes ohne let, const oder var
    character = new Character();
    level = level1;

    // Hilfsvariable canvas, da clearRect ansonsten nicht auf
    // width and height zugreifen kann
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        // Hilfsvariable weiter oben
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        // Zusätzliche Variable zur Übergabe des Keyboards
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('Collision with Character, energy ', this.character.energy);
                }
            });
        }, 200);
    }

    draw() {
        // Damit beim fortwährenden Aufruf der draw() Funktion (siehe unten)
        // die zuvorigen Frames gecleart werden:
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // Die letzten zwei Argumente geben die Größe des Bilds an
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);

        // draw() wird durch requestAnimationFrame immer wieder aufgerufen,
        // so oft es die Grafikkarte hergibt
        // Da bei requestAnimationFrame die Funktion asynchron etwas später
        // ausgeführt wird, funktioniert das this nicht mehr. Als workaround
        // wird das this in eine Variable gepackt.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}