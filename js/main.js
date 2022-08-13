const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const languages = $('#language');
const listLanguage = $('#list-language');

languages.onclick = function (){
    listLanguage.style.visibility = 'visible';
}

// Bar header
const barButton = $('#bar-button');
const barList = $('#bar-list')
const buttonCloseBar = $('#button-close-bar')
const overlay = $('#overlay')
function barClick() {
    overlay.classList.toggle('active');
    barList.classList.toggle('active');
}
if(barButton){
    barButton.onclick = function () {
        barClick()
    }
}
if(buttonCloseBar){
    buttonCloseBar.onclick = function () {
        barClick()
    }
}
if(overlay){
    overlay.onclick = function () {
        barClick()
    }
}



// Banner
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay:true,
});

// slide category
const body = $('body');
let slideCateNumber = 0;
if (body.offsetWidth < 740){
    slideCateNumber = 2
}else {
    slideCateNumber = 3
}
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: slideCateNumber,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,
});

// second best
let numberSecond = 0
if (body.offsetWidth >=740 && body.offsetWidth < 1024) {
    numberSecond = 3
}else if(body.offsetWidth < 740){
    numberSecond = 1
}else {
    numberSecond = 4
}
var swiper3 = new Swiper(".mySwiper3", {
    navigation: {
        nextEl: ".buttonNextSecond",
        prevEl: ".buttonPrevSecond",
    },
    slidesPerView: numberSecond,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Button back top
window.addEventListener('scroll',function (){
    let buttonBackTop = $('#button-back-top');
    if(buttonBackTop){
        buttonBackTop.classList.toggle('active',window.scrollY > 500);
    }
})

// Brand
let numberBrand = 6;
if (body.offsetWidth < 740) {
    numberBrand = 4
}
var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: numberBrand,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,
});

// product-detail
var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,
});

// icon search
const searchHeader = $('#icon-header-search');
const inputSearchHeader = $('#input-search-header')
searchHeader.onclick = function () {
    inputSearchHeader.focus();
}
