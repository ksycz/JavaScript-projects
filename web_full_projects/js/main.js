// vegas library

$(".introduction__image").vegas({
    slides: [
        { src: "./img/boathouse.jpg" },
    ],
    animation: [ 'kenburns' ],
    animationDuration: 3000,
});

$(".offer-gallery--left").vegas({
    slides: [
        { src: "./img/offer-gallery-1.jpg" },
        { src: "./img/offer-gallery-2.jpg" },
        { src: "./img/offer-gallery-3.jpg" }
    ],
    animation: [ 'fade' ],
    animationDuration: 3000,
    overlay: './vendor/vegas/overlays/03.png'
});

$(".zoom3").vegas({
    slides: [
        { src: "./img/cloud.jpg" },
    ],
    animation: 'kenburns'
});

// toggle search menu
document.getElementById("js-toggle").addEventListener("click", function () {
    var toggleIcon = document.getElementsByClassName("toggle-icon");
    var search = document.querySelectorAll(".search");
    search[0].classList.toggle("slide-top");
    setTimeout(function () {
        toggleIcon[0].classList.toggle("clicked")},
         800);
});

