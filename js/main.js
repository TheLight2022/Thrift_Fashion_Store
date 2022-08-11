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
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
