let burgerMenu = document.querySelector('.burger-menu'); // BURGER
let topBarRow = document.querySelector('.top-bar__row');
let topBarNavCol = document.querySelector('.top-bar__row__nav-col__list'); // CONTAINER
let menuLinks = document.querySelectorAll('.top-bar__row-col__nav a');
let closeMenuBtn = document.querySelector('.close-btn');
let menuButtons = document.querySelectorAll('.top-bar__row__nav-col .top-bar__row__nav-col__list p');

function getBodyScrollTop()
{
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

window.onscroll = function(){
    if(getBodyScrollTop() > 0){
        document.querySelector('.top-bar').classList.add('sticky');
    }
    else{
        document.querySelector('.top-bar').classList.remove('sticky');
    }
}


menuButtons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(!(item.classList.contains('active'))){
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }
    })
})

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


let rightPieceMenu = `
    <div class="top-bar__row__trial-col">
        <button class="top-bar__row__trial-col__btn">
            Jetzt 30 Tage testen
        </button>
    </div>
        <div class="top-bar__row__number-col">
            <a href='tel:+6934875110'>
                <svg width="3.1em" height="3.1em" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31Z" fill="#0F162D" fill-opacity="0.1"/>
                    <path d="M22.3265 18.7081L20.6314 17.7847C20.0249 17.4544 19.2644 17.6561 18.9039 18.243L18.3413 19.1587C18.2763 19.2646 18.1528 19.3165 18.0299 19.2953C17.0606 19.128 15.7165 18.4213 14.5408 17.252C13.529 16.2458 12.8149 14.5156 12.5707 13.8667C12.5163 13.7222 12.5835 13.562 12.7241 13.4967L13.5896 13.0945C14.2672 12.7797 14.5367 11.9611 14.1773 11.3086L13.2747 9.66958C12.9352 9.05321 12.1616 8.82118 11.5361 9.14811L9.77122 10.0705C9.42099 10.2536 9.17538 10.5857 9.09904 10.9718C8.55533 13.7227 10.3323 17.2582 12.4212 19.3357C14.5853 21.4879 18.8 23.8502 21.0586 22.6974C21.344 22.5518 21.6303 22.4069 21.799 22.1356C22.0506 21.7306 22.4534 21.0826 22.8064 20.5146C23.1965 19.8868 22.9773 19.0626 22.3265 18.7081Z" fill="#0A162F"/>
                </svg>
                <div>
                    <span>+69 348 75 11 0</span>
                    <p>Kostenlose Beratung</p>
                </div>                          
            </a>
    </div>
`


window.onresize = function(){
    if(document.documentElement.clientWidth < 576 && !(topBarNavCol.querySelector('.top-bar__row__trial-col'))){
        topBarNavCol.insertAdjacentHTML('beforeend',`${rightPieceMenu}`);
    }
    if(document.documentElement.clientWidth > 576 && topBarNavCol.querySelector('.top-bar__row__trial-col')){
        let rightPeaceBtn = topBarNavCol.querySelector('.top-bar__row__trial-col');
        let rightPeaceNumber = topBarNavCol.querySelector('.top-bar__row__number-col');
        rightPeaceBtn.outerHTML = '';
        rightPeaceNumber.outerHTML = '';
    }
    if(document.documentElement.clientWidth > 768){
        topBarNavCol.classList.remove('active');
    }
}

if(document.documentElement.clientWidth < 576 && !(topBarNavCol.querySelector('.top-bar__row__trial-col'))){
    topBarNavCol.insertAdjacentHTML('beforeend',`${rightPieceMenu}`);
}