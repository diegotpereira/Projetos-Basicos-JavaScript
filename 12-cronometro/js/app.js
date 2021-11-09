const meses = [
    'Janeiro',
    'Fevereiro',
    'Marco',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
]

const diasSemana = [
    'Domingo',
    'Segunda',
    'Terca',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
]

const sorteio = document.querySelector(".sorteio")
const prazoFinal = document.querySelector(".deadline")
const itens = document.querySelectorAll(".deadline-format h4")
    // console.log(itens);

let tempData = new Date()
let tempAno = tempData.getFullYear()
let tempMes = tempData.getMonth()
let tempDia = tempData.getDate()

// let dataFutura = new Date(2021, 3, 24, 11, 30, 0)
const dataFutura = new Date(tempAno, tempMes, tempDia + 10, 11, 30, 0)
const ano = dataFutura.getFullYear()
const horas = dataFutura.getHours()
const minutos = dataFutura.getMinutes()

let mes = dataFutura.getMonth()
mes = meses[mes]
const diaDaSemana = diasSemana[dataFutura.getDay()]
const data = dataFutura.getDate()
sorteio.textContent = `sorteio termina em ${diaDaSemana}, ${data} ${mes} ${ano} ${horas}:${minutos}am`

const tempoFuturo = dataFutura.getTime()
console.log(dataFutura);

function obterTempoDeRecomeco() {
    const hoje = new Date().getTime()
    const t = dataFutura - hoje

    // 1 s = 1000ms 
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // valor em ms 
    const umDia = 24 * 60 * 60 * 1000
    const umaHora = 60 * 60 * 1000
    const umMinuto = 60 * 1000

    let dias = t / umDia
    dias = Math.floor(dias)

    let horas = Math.floor((t % umDia) / umaHora)
    let minutos = Math.floor((t % umaHora) / umMinuto)
    let segundos = Math.floor((t % umMinuto) / 1000)

    // definir valores no array 
    const valores = [dias, horas, minutos, segundos]

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    itens.forEach(function(item, index) {
        item.innerHTML = valores[index]
    })

    if (t < 0) {
        clearInterval(contagemregressiva)
        prazoFinal.innerHTML = `<h4 class="expirado">desculpe, esse sorteio acabou</h4>`

    }
}
// contagem regressiva
let contagemregressiva = setInterval(obterTempoDeRecomeco, 1000)


// definir valores iniciais
obterTempoDeRecomeco()