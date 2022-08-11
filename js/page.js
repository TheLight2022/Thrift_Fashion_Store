$(document).ready(function(){
    $(".cate-item h3").click(function(){
       $(this).parent().find('ul').slideToggle('fast');
    })
})

