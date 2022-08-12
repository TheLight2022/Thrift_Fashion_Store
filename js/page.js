document.querySelector('#header-sticky').classList.add('hide')
if(window.scrollY > 170){     
    document.querySelector('#header-sticky').classList.remove('hide')
}else{
    document.querySelector('#header-sticky').classList.add('hide')
}
window.addEventListener('scroll',function (){
    if(window.scrollY > 0){     
        document.querySelector('#header-sticky').classList.remove('hide')
        document.querySelector('#header-bottom').classList.add('hide')
    }else{
        document.querySelector('#header-sticky').classList.add('hide')
        document.querySelector('#header-bottom').classList.remove('hide')
    }
})