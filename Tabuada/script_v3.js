function gerar() {
    let numero = document.getElementById('txtnum')
    let res = document.getElementById('resultado')
    let n = Number(numero.value)
    if (numero.value.length == 0) {
        window.alert('ERRO! Favor infornar um número')
    } else if (n == 0) {
        res.innerHTML = 'Nem vou calcular, é tudo ZERO!'
    } else {
        res.innerHTML= `Tabuada do número ${n}<hr>`
        let c = 1
        while (c <=10) {
            res.innerHTML += `${c} x ${n} = ${c*n}<br>`
            c++
        }
    res.innerHTML += `<hr>FIM`
    }
    
}