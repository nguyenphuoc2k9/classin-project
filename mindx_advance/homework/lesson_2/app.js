console.log($);
$(document).ready(function (){
    let btntoggle = $("h3");

    $(".lorem").slideUp()
    btntoggle.click(function(e){
        $(this).next().slideToggle();
        $(this).toggleClass("active")
    })
})