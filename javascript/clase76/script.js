const btn = document.getElementById('btn');

// Introducción al DOM
// window

// getElementById
const elem = document.getElementById('noticias');
// console.log(elem);



// querySelector ... Retorna el primer elemento que encuentra en el DOM
const noticia = document.querySelector('.noticia');
// console.log(noticia);



// querySelectorAll ... Retorna todos los elementos que encuentra en el DOM
const noticias = document.querySelectorAll('.noticia');
// console.log(noticias);

// noticias.forEach((noti, i) => {
//     noti.innerHTML = "<h2>Esto es un contenido editado</h2>";
// })

// classList

const agregarClass = () => {

    for(let i = 0; i < noticias.length; i++) {

        noticias[i].classList.add('nuevo-class');

    }
    // noticias.forEach((noti, i) => {
    //     noti.classList.add('nuevo-class');
    // });

}

document.addEventListener('click', function() {

    agregarClass();

}, btn);


//  add
//  remove
//  toggle
//  contains

// style
// getComputedStyle




