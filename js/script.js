const open = document.querySelector("#open");
const aside = document.querySelector("#aside");
const close = document.querySelector("#close")

open.addEventListener('click', function() {
    // Agrega la clase "nuevaClase" al elemento
    aside.classList.add('visible');
});

close.addEventListener('click', () => {
    aside.classList.remove('visible');
})