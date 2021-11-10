// SELEÇÃO ITENS 
const form = document.querySelector(".grocery-form")
const alerta = document.querySelector(".alert")
const mercado = document.getElementById("grocery")
const enviarBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const lista = document.querySelector(".grocery-list")
const limparBtn = document.querySelector(".clear-btn")

// opção editar
let editarElemento
let editarBandeira = false
let editarID = ""

// LISTENERS EVENTOS 

// enviar formulario 
form.addEventListener("submit", adicionarItem)

// limpar itens 
limparBtn.addEventListener("click", limparItens)

// carregar itens 
window.addEventListener('DOMContentLoaded', setupItens)

// funções
function adicionarItem(e) {
    e.preventDefault()
        // console.log(mercado.value);
    const value = mercado.value
        // if (valor) {
        //     console.log("o valor é verdadeiro");
        // }
    const id = new Date().getTime().toString()
        // console.log(id);
    if (value !== "" && !editarBandeira) {

        criarListaItens(id, value)

        // display alerta 
        displayAlerta("item adicionado a lista", "sucesso")

        // exibir no container 
        container.classList.add("show-container")

        // adicionar no local storage
        addNoLocalStorage(id, value)

        // definir voltar ao padrão
        definirVoltarParaDefault()


    } else if (value !== "" && editarBandeira) {
        // console.log('editando');
        editarElemento.innerHTML = value
        displayAlerta('valor alterado', "sucesso")

        // editar local storage 
        editarLocalStorage(editarID, value)
        definirVoltarParaDefault()
    } else {
        // console.log('valor está vazio');
        displayAlerta("por favor digite um valor", "perigo")
    }
}

// alerta display
function displayAlerta(text, action) {
    alerta.textContent = text
    alerta.classList.add(`alert-${action}`)

    // remover alerta 
    setTimeout(function() {
        alerta.textContent = ""
        alerta.classList.remove(`alert-${action}`)
    }, 1000)
}

// limpar itens 
function limparItens() {
    const itens = document.querySelectorAll(".grocery-item")

    if (itens.length > 0) {
        itens.forEach(function(item) {
            lista.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlerta("lista vazia", "perigo")
    definirVoltarParaDefault()
    localStorage.removeItem('lista')
}

// função editar
function editarItem(e) {
    // console.log("item editado");
    const elemento = e.currentTarget.parentElement.parentElement

    // definir item a editar
    editarElemento = e.currentTarget.parentElement.previousElementSibling

    // definir valor form
    mercado.value = editarElemento.innerHTML
    editarBandeira = true
    editarID = elemento.dataset.id
    enviarBtn.textContent = "Editar"

}


// função deletar
function deletarItem(e) {
    // console.log("item deletado");
    const elemento = e.currentTarget.parentElement.parentElement
    const id = elemento.dataset.id
    lista.removeChild(elemento)
    if (lista.children.length === 0) {
        container.classList.remove("shoe-container")
    }
    displayAlerta("item removido", "perigo")
    definirVoltarParaDefault()

    // remover local storage
    removerLocalStorage(id)
}

// LOCAL STORAGE 
function addNoLocalStorage(id, value) {
    // console.log("adicionado ao local storage");
    const mercado = { id, value }
        // console.log(mercado);
    let itens = getLocalStorage()
        // console.log(itens);
    itens.push(mercado)
    localStorage.setItem("lista", JSON.stringify(itens))
        // console.log(itens);

}

function removerLocalStorage(id) {
    let itens = getLocalStorage()

    itens = itens.filter(function(item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem("lista", JSON.stringify(itens))
}

function editarLocalStorage(id, value) {
    // definir item
    let itens = getLocalStorage()

    itens = itens.map(function(item) {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem("lista", JSON.stringify(itens))

    // const oranges = JSON.parse(localStorage.getItem("orange"))
    // console.log("oranges");
    // localStorage.removeItem("orange")
}

function getLocalStorage() {
    return localStorage.getItem("lista") ? JSON.parse(localStorage.getItem("lista")) : []
}

// voltar ao padrão
function definirVoltarParaDefault() {
    // console.log("voltar ao padrão");
    mercado.value = ""
    editarBandeira = false
    editarID = ""
    enviarBtn.textContent = "Enviar"
}

function setupItens() {
    let itens = getLocalStorage()
    if (itens.length > 0) {
        itens.forEach(function(item) {
            criarListaItens(item.id, item.value)
        })
        container.classList.add("show-container")
    }
}

function criarListaItens(id, value) {
    // console.log("item adicionado a lista");
    const elemento = document.createElement('article')

    // adicionando classe
    elemento.classList.add("grocery-item")

    // add id 
    const attr = document.createAttribute('data-id')
    attr.value = id
    elemento.setAttributeNode(attr)
    elemento.innerHTML = `<p class="title">${value}</p>
                             <div class="btn-container">
                                <!-- editar botão -->
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <!-- deletar botão -->
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                             </div>`;


    // deletar itens 
    const deletarBtn = elemento.querySelector(".delete-btn")
    deletarBtn.addEventListener("click", deletarItem)

    // editar itens 
    const editarBtn = elemento.querySelector(".edit-btn")
    editarBtn.addEventListener("click", editarItem)
        // console.log(deletarBtn);

    // append child
    lista.appendChild(elemento)
}