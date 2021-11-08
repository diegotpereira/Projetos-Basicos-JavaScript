// definir o valor inicial para zero
let contar = 0

// selecione o valor e os botões
const valor = document.querySelector("#valor")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const estilos = e.currentTarget.classList
        if (estilos.contains('diminuir')) {
            contar--

        } else if (estilos.contains('aumentar')) {
            contar++

        } else {
            contar = 0
        }
        if (contar > 0) {
            valor.style.color = "green"
        }
        if (contar < 0) {
            valor.style.color = "red"
        }
        if (contar === 0) {
            valor.style.color = "#222"
        }
        valor.textContent = contar
    })
})