const numeroSecreto = gerarNumero()
const menorValor = document.getElementById('menorValor')
const maiorValor = document.getElementById('maiorValor')


function gerarNumero(){
    return parseInt(Math.random()*1001)
    
}

menorValor.innerHTML = 0
maiorValor.innerHTML = 1000