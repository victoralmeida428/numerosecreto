function validacaoChute(chute) {
    const num = +chute;

    if (chuteInvalido(num)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (num > maiorValor || num < menorValor) {
        elementoChute.innerHTML += `
        <div>Valor deve ser entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (num === numeroSecreto) {
        document.body.innerHTML += `
        <h2>Parabéns, você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}
        `
    } else if (num > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>Número Secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>Número Secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteInvalido(num) {
    return Number.isNaN(num);
}
