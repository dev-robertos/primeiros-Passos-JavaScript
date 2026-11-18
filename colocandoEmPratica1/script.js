function calcular() {
    var txtOp = window.document.querySelector('input#txtnum')
    var res = window.document.querySelector('div#res')
    var numOp = Number(txtOp.value)

    if (txtOp.value === '') {
        res.innerHTML = `Por favor, digite um número.`
        return
    }

    res.innerHTML = ``

    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${i} x ${numOp} = ${numOp * i}<br>`
    }
}