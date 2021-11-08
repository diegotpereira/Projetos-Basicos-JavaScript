const btn = document.querySelector(".interruptor-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", function() {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()

    } else {
        btn.classList.remove('slide')
        video.play()
    }
})

// pre-carregador 
const precarregador = document.querySelector('.precarregador')

window.addEventListener("load", function() {
    precarregador.classList.add("hide-precarregador");
    // if (!btn.classList.contains('slide')) {
    //     btn.classList.add('slide')
    // } else {
    //     btn.classList.remove('slide')
    // }
})