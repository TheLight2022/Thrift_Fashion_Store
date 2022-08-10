const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const languages = $('#language');
const listLanguage = $('#list-language');

languages.onclick = function (){
    listLanguage.style.visibility = 'visible';
}

