class World {

    // Variablen definiert man in classes ohne let, const oder var
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0)
    ];

    // Hilfsvariable canvas, da clearRect ansonsten nicht auf
    // width and height zugreifen kann
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        // Hilfsvariable weiter oben
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        // Damit beim fortwährenden Aufruf der draw() Funktion (siehe unten)
        // die zuvorigen Frames gecleart werden:
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Die letzten zwei Argumente geben die Größe des Bilds an
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.backgroundObjects);

        // draw() wird durch requestAnimationFrame immer wieder aufgerufen,
        // so oft es die Grafikkarte hergibt
        // Da bei requestAnimationFrame die Funktion asynchron etwas später
        // ausgeführt wird, funktioniert das this nicht mehr. Als workaround
        // wird das this in eine Variable gepackt.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}