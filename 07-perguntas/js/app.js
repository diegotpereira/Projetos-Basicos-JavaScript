// usando seletores dentro do elemento
const perguntas = document.querySelectorAll(".pergunta")

perguntas.forEach(function(pergunta) {
    // console.log(pergunta);
    const btn = pergunta.querySelector(".pergunta-btn")
        // console.log(btn);
    btn.addEventListener("click", function() {
        perguntas.forEach(function(item) {
            // console.log(item);
            if (item !== pergunta) {
                item.classList.remove("show-text")
            }
        })

        pergunta.classList.toggle("show-text")
    })
})






// atravessando o dom
// const btns = document.querySelectorAll(".pergunta-btn")

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const pergunta = e.currentTarget.parentElement.parentElement;
//         pergunta.classList.toggle("show-text")
//     })
// })