let burgerMenu = document.querySelector('.burger-menu'); // BURGER
let topBarNavCol = document.querySelector('.top-bar__row__nav-col__list'); // CONTAINER
let menuLinks = document.querySelectorAll('.top-bar__row-col__nav a');
let closeMenuBtn = document.querySelector('.close-btn');

burgerMenu.addEventListener('click', ()=>{
    if(!(topBarNavCol.classList.contains('active'))){  
        burgerMenu.classList.add('active');
        topBarNavCol.classList.add('active');
    }
    else{
        burgerMenu.classList.remove('active');
        topBarNavCol.classList.remove('active');
    }
})

closeMenuBtn.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    topBarNavCol.classList.remove('active');
});