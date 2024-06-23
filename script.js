const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle clicking on project elements
    function showCard(cardId) {
        var card = document.getElementById(cardId);
        card.style.display = "block";
    }

    // Function to handle closing the card
    function closeCard(cardId) {
        var card = document.getElementById(cardId);
        card.style.display = "none";
    }

    // Get all elements with class "elem" (project elements)
    var elems = document.querySelectorAll(".elem");

    // Loop through each project element
    elems.forEach(function(elem, index) {
        var cardId = "card" + (index + 1); // Construct the corresponding card ID
        elem.addEventListener("click", function() {
            showCard(cardId); // Show the corresponding card when clicked
        });
    });

    // Get all elements with class "close-btn" (close buttons in cards)
    var closeBtns = document.querySelectorAll(".close-btn");

    // Loop through each close button
    closeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var cardId = this.parentElement.parentElement.id; // Get the ID of the parent card
            closeCard(cardId); // Close the corresponding card
        });
    });
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
    
}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()