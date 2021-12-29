let menu = document.querySelector('.menu') 
let cabeçalho = document.querySelector('.header') 
let menuToggle = document.querySelector('.toggle');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
    cabeçalho.classList.toggle('active')
}