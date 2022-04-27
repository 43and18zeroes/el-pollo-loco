let canvas;       
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    // Wir legen ein neues Objekt namens World an und geben ihm
    // die Variable canvas mit
    world = new World(canvas);

    console.log('My Character is', world.character);
}


// EventListener für gedrückte Tasten
document.addEventListener('keypress', (e) => {
    console.log(e);
});