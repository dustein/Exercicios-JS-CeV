function calcular() {
    let numero = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        window.alert('ERRO. favor informar um número!')
    } else {
        let n = Number(numero.value)
        let cont = 0
        tab.innerHTML = "" //vazio para limpar a tab onde aparece resultado
        while (cont <= 10) {
            //agora vou adicionar elementos no select criado no html, ao invés de criar lá, vou criar por aqui, serve para criar qualquer elemento de forma DINAMICA em JS
            let item = document.createElement('option')
            item.text = 't a b u a d a'
            item.text = `${n} x ${cont} = ${n * cont}`
            //o item.text é a parte de dentro do option criado
            item.value = `tab${cont}`
            //cria o VALUE que aqui não faz diferença mas é iumportante para integrar com PHP etc, vai criar os valores tab1, tab2...
            tab.appendChild(item) // adicionar um elemento filho, que vai ser o "item"
            cont++ // para ir para o próximo multiplicador
        }
    }
    
    
}
