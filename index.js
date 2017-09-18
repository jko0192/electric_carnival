"use strict"

let singer_slides = document.getElementsByClassName('singer-slides');

let click_previous = document.getElementById('click-previous');

let click_next = document.getElementById('click-next');

let slideIndex = 0;

playSlideShow(slideIndex);

function playSlideShow(num) {
    
    slideIndex += num;
    
    for(var i = 0; i < singer_slides.length; i++){
        singer_slides[i].style.display = "none";
    }
    
    if(slideIndex < 0) slideIndex = singer_slides.length-1;
    
    if(slideIndex === singer_slides.length) slideIndex = 0;
    
    
    singer_slides[slideIndex].style.display = "block";
    
}

click_previous.addEventListener('click', function(e) {
    playSlideShow(-1)
});

click_next.addEventListener('click', function(e) {
    playSlideShow(1);
})

