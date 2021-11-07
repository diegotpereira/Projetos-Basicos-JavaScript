const cores = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const cor = document.querySelector(".cor")

btn.addEventListener('click', function() {

    // obter número aleatorio entre 0 - 3
    const numeroAleatorio = getNumeroAleatatorio()
    document.body.style.backgroundColor = cores[numeroAleatorio]
    cor.textContent = cores[numeroAleatorio]
    console.log(numeroAleatorio)
})

function getNumeroAleatatorio() {
    return Math.floor(Math.random() * cores.length)
}