// dados de avaliações locais
const avaliacoes = [{
        id: 1,
        nome: "susan smith",
        trabalho: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        texto: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        nome: "anna johnson",
        trabalho: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        texto: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        nome: "peter jones",
        trabalho: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        texto: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        nome: "bill anderson",
        trabalho: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        texto: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
]

// Selecione itens
const img = document.getElementById("pessoa-img")
const autor = document.getElementById("autor")
const trabalho = document.getElementById("trabalho")
const info = document.getElementById("info")

const anteBtn = document.querySelector(".ante-btn")
const proxBtn = document.querySelector(".prox-btn")
const aleaBtn = document.querySelector(".aleatorio-btn")


// definir o item inicial
let atualItem = 0


// carregar item inicial
window.addEventListener("DOMContentLoaded", function() {
    exibirPessoa()
})

// mostrar pessoa com base no item
function exibirPessoa() {
    const item = avaliacoes[atualItem]
    img.src = item.img
    autor.textContent = item.nome
    trabalho.textContent = item.trabalho
    info.textContent = item.texto
}

// exibir pessoa anterior
anteBtn.addEventListener("click", function() {
    atualItem--
    if (atualItem < 0) {
        atualItem = avaliacoes.length - 1
    }
    exibirPessoa()
})

// exibir proxima pessoa 
proxBtn.addEventListener("click", function() {
    atualItem++
    if (atualItem > avaliacoes.length - 1) {
        atualItem = 0
    }
    exibirPessoa(atualItem)
})

// exibir pessoa aleatoria
aleaBtn.addEventListener("click", function() {
    atualItem = Math.floor(Math.random() * avaliacoes.length)
    console.log(atualItem)
    exibirPessoa()
})