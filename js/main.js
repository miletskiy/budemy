
// $('a').click(function () {
//   alert("Hello, World!");
// });
$(document).ready(function(){
    var screenHeight = 720;
    // console.log($(window).height());
    // console.log($(document).height());
    $(window).scroll(function(){

        // console.log($(window).scrollTop());
        if($(window).scrollTop() > screenHeight){
            $('.navbar').addClass('navbar-fixed-top');
        } else{
            $('.navbar').removeClass('navbar-fixed-top');
        }
    })
});
$('a[href^="#"]').on('click', function(e){
    e.preventDefault();

    var hash = this.hash;
 
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 400, function(){
        window.location.hash = hash;
    });
})
