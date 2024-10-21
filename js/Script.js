/*Empiezo con js para que desaparesca un elemento y aparezca el otro al apretar un boton*/
const linkInicio = document.querySelector('.link-Inicio');
const linkRegistro = document.querySelector('.link-Registrar');
const cajaInicio = document.querySelector('.inici');
const cajaRegistro = document.querySelector('.caja-larga');

linkInicio.addEventListener('click', () => {
    cajaInicio.classList.add('activate');
    cajaRegistro.classList.remove('activate');
});

linkRegistro.addEventListener('click', () => {
    cajaRegistro.classList.add('activate');
    cajaInicio.classList.remove('activate');
});
