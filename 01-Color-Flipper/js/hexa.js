const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const cor = document.querySelector(".cor")

btn.addEventListener("click", function() {
    let hexaCor = '#'

    for (let i = 0; i < 6; i++) {
        hexaCor += hexa[getNumeroAleatatorio()]
    }
    cor.textContent = hexaCor
    document.body.style.backgroundColor = hexaCor
})

function getNumeroAleatatorio() {
    return Math.floor(Math.random() * hexa.length)
}