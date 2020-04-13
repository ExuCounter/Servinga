let burgerMenu = document.querySelector('.burger-menu'); // BURGER
let topBarNavCol = document.querySelector('.top-bar__row-col__nav'); // CONTAINER
let menuLinks = document.querySelectorAll('.top-bar__row-col__nav a')
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

menuLinks.forEach((item)=>{
    item.onclick = ()=>{
        burgerMenu.classList.remove('active');
        topBarNavCol.classList.remove('active');
    }
})