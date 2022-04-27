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
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)
    ];

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
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        // Damit beim fortwährenden Aufruf der draw() Funktion (siehe unten)
        // die zuvorigen Frames gecleart werden:
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // Die letzten zwei Argumente geben die Größe des Bilds an
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        
        this.ctx.translate(-this.camera_x, 0);

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
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}