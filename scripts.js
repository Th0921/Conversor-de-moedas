const button = document.getElementById('converter-butao')
const select = document.getElementById('conversor-euro')

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000078

const converterValor = () => {
    const intupReais = document.getElementById('input-real').value
    const valorDoReal = document.getElementById('valorReal')
    const valorEmDolar = document.getElementById('valorDolar')
    

    valorDoReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(intupReais)

    if (select.value === "US$ Dólar americano") {
        valorEmDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(intupReais / dolar)
    }

    if (select.value === "€ Euro") {
        valorEmDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(intupReais / euro)
    }

    if (select.value === "₿ Bitcoin") {
        valorEmDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(intupReais / bitcoin)
    }
}

changeSelect = () => {
    const paragrafoDolar = document.getElementById("paragrafoDolar")
    const imagemEuro = document.getElementById("id.imagem")

    if (select.value === 'US$ Dólar americano') {
        paragrafoDolar.innerHTML = "Dólar Americano"
        imagemEuro.src = "./estados-unidos (1) 1 (1).svg"
    }

    if (select.value === '€ Euro') {
        paragrafoDolar.innerHTML = "Euro"
        imagemEuro.src = "./imagem-euro.svg"
    }

    if (select.value === '₿ Bitcoin') {
        paragrafoDolar.innerHTML = "Bitcoin"
        imagemEuro.src = "./bitcoin.png"
    }

    converterValor()
}

button.addEventListener('click', converterValor)
select.addEventListener("change", changeSelect)