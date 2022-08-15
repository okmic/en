//Anchors
const anchors = document.querySelectorAll('.header__link')
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//Burger menu
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active')
    })
    $('.close__menu').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active')
    })
})

//slider
$(function() {
    $('.rev_slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
              }
            }
        ]
    })
})