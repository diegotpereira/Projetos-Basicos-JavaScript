const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()


const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function() {
    // linksContainer.classList.toggle("show-links")
    const containerHeight = linksContainer.getBoundingClientRect().height
        // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height
        // console.log(linksHeight);
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector(".top-link")

// fixar navbar
window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})

// selecionar links
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // 
        e.preventDefault()

        // navegue para um local específico
        const id = e.currentTarget.getAttribute("href").slice(1)
            // console.log(id);
        const elemento = document.getElementById(id)

        // calcular a altura
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("fixed-nav")

        let posicao = elemento.offsetTop - navHeight

        if (!fixedNav) {
            posicao = posicao - navHeight
        }

        if (navHeight > 82) {
            posicao = posicao + containerHeight
        }
        // console.log(posicao)
        window.scrollTo({
            left: 0,
            top: posicao
        })
        linksContainer.style.height = 0
    })
})