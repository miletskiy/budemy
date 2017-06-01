
$(document).ready(function(){
    var screenHeight = 910;
    // console.log($(window).height());
    // console.log($(document).height());
    $(window).scroll(function(){

        // console.log($(window).scrollTop());
        if($(window).scrollTop() > screenHeight){
            $('.navbar').addClass('fixed-top');
        } else{
            $('.navbar').removeClass('fixed-top');
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
});

$('.js-waypoint').waypoint(function(direction){
    $('.js-waypoint').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-waypoint-left').waypoint(function(direction){
    $('.js-waypoint-left').addClass('animated slideInLeft');
}, {
    offset: '50%'
});

$('.js-waypoint-right').waypoint(function(direction){
    $('.js-waypoint-right').addClass('animated slideInRight');
}, {
    offset: '50%'
});

$('.js-waypoint-leftFlip').waypoint(function(direction){
    $('.js-waypoint-leftFlip').addClass('animated flipInY');
}, {
    offset: '50%'
});

$('.js-waypoint-rightFlip').waypoint(function(direction){
    $('.js-waypoint-rightFlip').addClass('animated flipInY');
}, {
    offset: '50%'
});
