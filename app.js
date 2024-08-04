const menuBtn=document.querySelector('.menu-button')
const menuCloseBtn=document.querySelector('.menu-close-button');
const navdiv=document.querySelector('.nav-div')

menuBtn.addEventListener('click',()=>{
    navdiv.style.left='0';   
})

menuCloseBtn.addEventListener('click',()=>{
    navdiv.style.left='-100%';
})

