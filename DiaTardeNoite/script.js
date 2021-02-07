function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var agora = window.document.getElementById('agora')
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundo')
    agora.innerText=`${hora}h ${min}m ${seg}s`
    if (hora < 12) {
        mensagem.innerHTML='Bom Dia!'
        fundo.style.backgroundColor='yellow'
        imagem.src = 'dia.png'
    } else if (hora >= 12 && hora < 18) {
        mensagem.innerHTML='Boa Tarde!'
        fundo.style.backgroundColor='blue'
        imagem.src = "tarde.png"
    } else {
        mensagem.innerHTML='Boa Noite!'
        fundo.style.backgroundColor='black'
        imagem.src = 'noite.jpg'
    }
}

