let dado = document.getElementById('divdado')

document.getElementById('botao').addEventListener('click', clicker)

function clicker() {
    let num = Math.random()
    let numMulti = Math.round(num * 6)

    function gerarCor() {
        let cor = Math.round(Math.random() * 255)
        return cor
    }

    let corPadronada1 = gerarCor()
    let corPadronada2 = gerarCor()
    let corPadronada3 = gerarCor()


    dado.style.backgroundColor = `rgb(${corPadronada1}, ${corPadronada2}, ${corPadronada3})`

    switch (numMulti) {
        case 1: 
        dado.textContent = '\u2680'
        break

        case 2: dado.textContent = '\u2681'
        break

        case 3: dado.textContent = '\u2682' 
        break

        case 4: dado.textContent = '\u2683' 
        break
        
        case 5: dado.textContent = '\u2684' 
        break

        case 6: dado.textContent = '\u2685' 
        break
    }

}