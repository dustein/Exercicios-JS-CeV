function calcular() {
    let numero = document.getElementById('num')
    let resultado = document.getElementById('res')
    let n = Number(numero.value)    
    if (numero.value.length == 0) {
        window.alert('ERRO. favor informar um número!')
    } else {
        if (n == 0) {
        resultado.innerHTML='Nem vou calcular, é tudo ZERO mesmo...'
    } else {
        resultado.innerHTML='Calulando...<hr>'
        for (let cont = 0; cont <= 10; cont ++) {
            resultado.innerHTML += `${n} x ${cont} = ${n * cont}<br>`
        }
        resultado.innerHTML += '<hr>FIM'
    }
    }
    
}
