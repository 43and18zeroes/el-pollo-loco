let canvas;       
let world;

function init() {
    canvas = document.getElementById('canvas');
    // Wir legen ein neues Objekt namens World an und geben ihm
    // die Variable canvas mit
    world = new World(canvas);

    console.log('My Character is', world.character);
}