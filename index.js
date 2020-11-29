const overlay = document.getElementById('bienvenida')
const modalBienvenida = document.getElementById('modal-inicial')
const botonBienvenida = document.getElementById('boton-bienvenida')


const grilla = document.querySelector(".grilla");
// const botonFacil = document.getElementById("facil");
// const botonMedio = document.getElementById("medio");
// const botonDificil = document.getElementById("dificil");
const nuevoJuego = document.getElementById("nuevo-juego");
// const reiniciarJuego = document.getElementById("reiniciar-juego");




// Grilla

let items = ["🐷", "🐹", "🦊", "🐶", "🐴", "🐔", "🐷", "🐸", "🐤", "🐱"];  
let listaDeAnimales = [];
let animales = "";

const obtenerNumeroAlAzar = (items) => {
  let largo = items.length;
  return Math.floor(Math.random() * largo);
};
const obtenerAnimalAlAzar = (items) => {
  return items[obtenerNumeroAlAzar(items)];
};

const crearGrilla = (ancho, alto) => {
  const anchoDeGrilla = 50 * ancho;
  grilla.style.width = `${anchoDeGrilla}px`;

  for (let i = 0; i < ancho; i++) {
    listaDeAnimales[i] = [];
    for (let j = 0; j < alto; j++) {
      listaDeAnimales[i][j] = obtenerAnimalAlAzar(items);
    }
  }

  grilla.innerHTML = "";
  for (let i = 0; i < listaDeAnimales.length; i++) {
    for (let j = 0; j < listaDeAnimales[i].length; j++) {
      animales = obtenerAnimalAlAzar(items);
      listaDeAnimales[i][j] = animales;
      grilla.innerHTML += `<div data-x="${i}" data-y="${j}"> ${animales}</div>`;
    }
  }

  return grilla;
};

nuevoJuego.onclick = () => {
    crearGrilla(6, 6);
}

botonBienvenida.onclick = () => {
    modalBienvenida.classList.add('hidden')
    overlay.classList.add('hidden')
    crearGrilla(6, 6);
}

// const ocultarBotones = () => {
//     botonFacil.classList.add("ocultar");
//     botonMedio.classList.add("ocultar");
//     botonDificil.classList.add("ocultar");
// };
  
// botonFacil.onclick = () => {
//     crearGrilla(6, 6);
//     ocultarBotones();
//     reiniciarJuego.classList.add("facil");
// };
  
// botonMedio.onclick = () => {
//     crearGrilla(8, 8);
//     ocultarBotones();
//     reiniciarJuego.classList.add("medio");
// };
  
// botonDificil.onclick = () => {
//     crearGrilla(10, 10);
//     ocultarBotones();
//     reiniciarJuego.classList.add("dificil");
// };
  
// nuevoJuego.onclick = () => {
//     botonFacil.classList.toggle("ocultar");
//     botonMedio.classList.toggle("ocultar");
//     botonDificil.classList.toggle("ocultar");
//     reiniciarJuego.classList.remove("facil");
//     reiniciarJuego.classList.remove("medio");
//     reiniciarJuego.classList.remove("dificil");
// };
  
// reiniciarJuego.onclick = () => {
//     if (reiniciarJuego.classList.contains("facil")) {
//       crearGrilla(6, 6);
//     } else if (reiniciarJuego.classList.contains("medio")) {
//       crearGrilla(8, 8);
//     } else if (reiniciarJuego.classList.contains("dificil")) {
//       crearGrilla(10, 10);
//     }
// };
  
