const slider = document.getElementById('page2-image-slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slides').length;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

let slideInterval = setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        slideInterval = setInterval(nextSlide, 3000);
    });
});



const cards = document.querySelectorAll(".cards");
const images = document.querySelectorAll("#img-container img");
var cardIndex = 0;
var interval;

function activateCard(index){
    cards.forEach(card => card.classList.remove('pointed'));
    cards[index].classList.toggle("pointed");
    images.forEach((image) => {image.style.opacity = "0"});
    images[index].style.opacity = "1";
}

function activateNextCard(){
    cardIndex++;
    if(cardIndex >= cards.length){
        cardIndex = 0;
    }
    activateCard(cardIndex);
}

function startAnimation(){
   clearInterval(interval);

   activateCard(cardIndex);

   interval = setInterval(activateNextCard, 3000);
}

startAnimation();

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        cardIndex = index;
        startAnimation();
    })
});

const contactUs = document.querySelector("#page1-text button");
contactUs.addEventListener("click", () => {
    document.querySelector("#page1").style.filter = "blur(10px)";
    document.querySelector("#login-form").style.display = "block";
})

const closeBtn = document.querySelector("#login-form span");
closeBtn.addEventListener("click", () => {
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#page1").style.filter = "none";
})