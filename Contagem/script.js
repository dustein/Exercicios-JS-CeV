function comeca() {
    var inicial = document.querySelector('input#inicio')
    var final = document.querySelector('input#fim')
    var pulo = document.querySelector('input#passo')
    var resultado = document.querySelector('div#resp')
    //Teste de validade
    if (inicial.value.length == 0 || final.value.length == 0 || pulo.value.legth == 0) {
        window.alert('ERRO! Preencha os campos corretamente.')
    } else {
        resultado.innerHTML='Contando... :'
        let ini = Number(inicial.value)
        let fini = Number(final.value)
        let pas = Number(pulo.value)
        if (ini < fini) { // se o valor inicial for menor, contagem progressiva
            for (let conta = ini; conta <= fini; conta += pas) {
            //dentro de resultado já tem o valor str 'Contando' por isso += para concatenar os próximos valores
            resultado.innerHTML += ` ${conta} \u{1F340}`
            //    \u{codigo do emoji}
            }
        resultado.innerHTML += ` \u{1F601}`
        } else { // se o valor inicial for maior, vai contar para trás
            for (let conta = ini; conta > fini; conta -= pas) {
                resultado.innerHTML += ` ${conta} \u{26D4}`
            }
            resultado.innerHTML += ` \u{1F61D}`
        }


        
    }
}