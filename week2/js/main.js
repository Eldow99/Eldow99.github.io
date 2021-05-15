$(document).ready(function(){
    $('.burger__menu').click(function(event){
        $('.burger__menu,.navbar__menu').toggleClass('active');
        $('body').toggleClass('.lock');
    })
})
$(document).ready(function(){
    $('.navbar__menu li').click(function(event){
        $('.navbar__menu li').toggleClass('active');
    })
})
console.log("saa")