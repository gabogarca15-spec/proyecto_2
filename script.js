const botonValentino = document.getElementById('btn-valentino');
const botonMarc      = document.getElementById('btn-marc');
const botonLorenzo   = document.getElementById('btn-lorenzo');
const botonGarcia    = document.getElementById('btn-garcia');


botonValentino.addEventListener('click', function() {
  fondo.src      = "img/valentino.jpg";
  nombre.textContent = "Valentino Rossi";
});

botonMarc.addEventListener('click', function() {
  fondo.src      = "img/marc.jpeg";
  nombre.textContent = "Marc Márquez";
});

botonLorenzo.addEventListener('click', function() {
  fondo.src      = "img/lorenzo.jpg";
  nombre.textContent = "Jorge Lorenzo";
});

botonGarcia.addEventListener('click', function() {
  fondo.src      = "img/garcia.jpg";
  nombre.textContent = "Néstor García";
});
