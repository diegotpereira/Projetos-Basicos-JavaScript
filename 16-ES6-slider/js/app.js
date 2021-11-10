import data from '../js/data.js'
const container = document.querySelector('.slide-container')
const proxBtn = document.querySelector('.prox-btn')
const anteBtn = document.querySelector('.ante-btn')

// se o comprimento for 1 ocultar botões
if (data.length === 1) {
    proxBtn.style.display = 'none'
    anteBtn.style.display = 'none'
}

// se o comprimento for 2, adicione cópias dos slides
let pessoas = [...data]
if (data.length === 2) {
    pessoas = [...data, ...data]
}
container.innerHTML = pessoas.map((pessoa, slideIndex) => {
    const { img, nome, trabalho, texto } = pessoa
    let posicao = 'proximo'
    if (slideIndex === 0) {
        posicao = 'ativo'
    }
    if (slideIndex === pessoas.length - 1) {
        posicao = 'ultimo'
    }
    if (data.length <= 1) {
        posicao = 'ativo'
    }
    return `<article class="slide ${posicao}">
               <img src=${img} class="img alt="${nome}/>
               <h4>${nome}</h4> 
               <p class="title">${trabalho}</p>
               <p class="text">
                 ${texto}
               </p>
               <div class="quote-icon">
                  <i class="fas fa-quote-right"></i>
               </div>
            </article>`
}).join('')

const iniciarSlide = (type) => {
    // obter todos os três slides ativos, ultimo próximo
    const ativo = document.querySelector(".ativo")
    const ultimo = document.querySelector(".ultimo")
    let proximo = ativo.nextElementSibling

    if (!proximo) {
        proximo = container.firstElementChild
    }

    ativo.classList.remove('ativo')
    ultimo.classList.remove('ultimo')
    proximo.classList.remove('proximo')

    if (type === 'ante') {
        ativo.classList.add('proximo')
        ultimo.classList.add('ativo')
        proximo = ultimo.previousElementSibling
        if (!proximo) {
            proximo = container.lastElementChild
        }
        proximo.classList.remove('proximo')
        proximo.classList.add('ultimo')
        return
    }
    ativo.classList.add('ultimo')
    ultimo.classList.add('proximo')
    proximo.classList.add('ativo')
}

proxBtn.addEventListener("click", () => {
    console.log("proximo");
    iniciarSlide()
})

anteBtn.addEventListener("click", () => {
    console.log("anterior");
    iniciarSlide('ante')
})