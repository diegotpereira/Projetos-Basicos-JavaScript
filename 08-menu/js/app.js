const menu = [{
        id: 1,
        titulo: "buttermilk pancakes",
        categoria: "cafeManha",
        preco: 15.99,
        img: "./imagens/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        titulo: "diner double 2",
        categoria: "almoço",
        preco: 13.99,
        img: "./imagens/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        titulo: "godzilla milkshake",
        categoria: "bebidas",
        preco: 6.99,
        img: "./imagens/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        titulo: "country delight",
        categoria: "cafeManha",
        preco: 20.99,
        img: "./imagens/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        titulo: "egg attack",
        categoria: "almoco",
        preco: 22.99,
        img: "./imagens/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        titulo: "oreo dream",
        categoria: "bebidas",
        preco: 18.99,
        img: "./imagens/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        titulo: "bacon overflow",
        categoria: "cafeManha",
        preco: 8.99,
        img: "./imagens/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        titulo: "american classic",
        categoria: "almoco",
        preco: 12.99,
        img: "./imagens/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        titulo: "quarantine buddy",
        categoria: "bebidas",
        preco: 16.99,
        img: "./imagens/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        titulo: "bison steak",
        categoria: "jantar",
        preco: 22.99,
        img: "./imagens/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")

// console.log(filterBtn);

// carregar itens
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu)
    displayMenuButtons()
})

function displayMenuItems(menuItems) {
    // console.log("shake and bake");
    let displayMenu = menuItems.map(function(item) {
        // console.log(item);

        return `<article class="menu-item">
                    <img src="${item.img}" class="foto" alt="item menu">
                    <div class="item-info">
                        <header>
                            <h4>${item.titulo}</h4>
                            <h4 class="preco">R$${item.preco}</h4>
                        </header>
                        <p class="item-texto">
                            ${item.desc}
                        </p>
                    </div>
                </article>`;
    })
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categorias = menu.reduce(function(values, item) {
        if (!values.includes(item.categoria)) {
            values.push(item.categoria)
        }
        return values
    }, ['todos'])

    // console.log(categorias);
    const categoriaBtns = categorias.map(function(categoria) {
            return `<button class="filter-btn" type="button" data-id="${categoria}">
                    ${categoria}
                </button>`
        }).join("")
        // console.log(categoriaBtns)
    container.innerHTML = categoriaBtns
    const filterBtn = container.querySelectorAll(".filter-btn")
        // filtrar itens 
    filterBtn.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const categoria = e.currentTarget.dataset.id
            const menuCategoria = menu.filter(function(menuItem) {

                console.log(menuItem.categoria);
                if (menuItem.categoria === categoria) {
                    return menuItem
                }
            })

            // console.log(menuCategoria);
            if (categoria === 'todos') {
                displayMenuItems(menu)

            } else {
                displayMenuItems(menuCategoria)
            }
        })
    })
}