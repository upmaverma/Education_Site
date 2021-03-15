let image = document.getElementById('image_1');
let moreImage = ['img_1.gif', 'img_2.gif', 'img_4.gif']

setInterval(function () {
    let randomImage = Math.floor(Math.random() * 3);
    image.src = moreImage[randomImage];
}, 2000);

var navbar = document.querySelector('nav')

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function slides(n){
    showSlides(slideIndex += n);
}
function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}