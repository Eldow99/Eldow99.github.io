$(document).ready(function(){
    $(`.burger__menu`).click(function(event){
        $(`.burger__menu,.navbar__menu`).toggleClass('active')
            $(`body`).toggleClass('lock')
    })
})