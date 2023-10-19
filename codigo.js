const linksMenu = document.querySelector('#links');
const closeMenu = document.querySelector('#closeMenu');
const menuhamburguesa = document.querySelector('#menuhamburguesa');
const servicios = document.querySelector('#servicios');
const subMenu = document.querySelector('.sub-menu');


menuhamburguesa.addEventListener('click',()=>{
linksMenu.classList.add('visible')
})
closeMenu.addEventListener('click',()=>{
    linksMenu.classList.toggle('visible') ;
    subMenu.classList.toggle('visible') 
    subMenu.classList.toggle('active')
    if(subMenu.classList.contains('active') ){
        subMenu.classList.remove('active')
    }
    
})
servicios.addEventListener('click',(e)=>{
e.preventDefault()    
subMenu.classList.toggle('visible')
subMenu.classList.toggle('active')
})


// _________________nav en computador__________________________

servicios.addEventListener('mouseenter', () => {
    subMenu.classList.add('active');
});

subMenu.addEventListener('mouseleave', () => {
    subMenu.classList.remove('active');
});

console.log(servicios)
