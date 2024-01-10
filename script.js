const imagenes = document.querySelectorAll('.imagen');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        removeActiveClass();
        imagen.classList.add('active')
    })
})

function removeActiveClass(){
    imagenes.forEach(imagen =>{
        imagen.classList.remove('active')
    })
}