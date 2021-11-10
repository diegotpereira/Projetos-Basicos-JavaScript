const slides = document.querySelectorAll(".slide");
const proxBtn = document.querySelector(".proxBtn");
const anteBtn = document.querySelector(".anteBtn");
slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let contar = 0;
proxBtn.addEventListener("click", function() {
    contar++;
    carrossel();
});

anteBtn.addEventListener("click", function() {
    contar--;
    carrossel();
});

function carrossel() {

    if (contar < slides.length - 1) {
        proxBtn.style.display = "block";
    } else {
        proxBtn.style.display = "none";
    }
    if (contar > 0) {
        anteBtn.style.display = "block";
    } else {
        anteBtn.style.display = "none";
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${contar * 100}%)`;
    });
}

anteBtn.style.display = "none";