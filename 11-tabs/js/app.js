const btns = document.querySelectorAll(".tab-btn")
const sobre = document.querySelector(".sobre")
const artigos = document.querySelectorAll(".content")

sobre.addEventListener("click", function(e) {
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id
    if (id) {
        // remover ativo de outro botão
        btns.forEach(function(btn) {
                btn.classList.remove("active")
                e.target.classList.add("active")
            })
            // esconder outro artigo
        artigos.forEach(function(artigos) {
            artigos.classList.remove("active")
        })
        const elemento = document.getElementById(id)
        elemento.classList.add("active")
    }
})