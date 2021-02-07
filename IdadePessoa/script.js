function iniciar() {
    var calendario = new Date()
    var hoje = calendario.getFullYear()
    var nascimento = document.getElementById('nascimento')    
    var resp = document.getElementById('resposta')
//  var foto = document.getElementById('foto')
    //se o valor de nascimento for = 0 é que o usuário não digitou o ano de nascimento. ||ou se o valor do ano de nascimento for maior que o valor do ano atual, o valor é inválido. Esse IF serve para validação de dados
    if (nascimento.value.length == 0 || nascimento.value > hoje) {
        window.alert('Erro. Verifique os dados. Tente novamente')
    } else {
        //veja que no caso tem duas opcoes do Name sexo, o 'homem' [0] e o 'mulher' [1]. 
        var sexo = document.getElementsByName('sexo')
        var idade = hoje - nascimento.value
        var genero = '' // vazio
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) { //sexo[0] é a primeira checkbox
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe.jpg')
                // bebe
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovem.png')
                // jovem
            } else if (idade >= 21 && idade < 65) {
                img.setAttribute('src', 'homem.jfif')
                // homem
            } else if (idade >= 65) {
                img.setAttribute('src', 'velho.jpeg')
                // velho
            }
        } else if (sexo[1].checked) { // sexo[1] a segunda checkbox
            genero = 'mulher' // enxugando parametros da idade...
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebef.png')
                // bebe
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemf.jpg')
                // jovem
            } else if (idade < 65) {
                img.setAttribute('src', 'mulher.jpg')
                // mulher
            } else if (idade >= 65) {
                img.setAttribute('src', 'velha.jpg')
                // velha
            }
        }    
        resp.innerHTML=`Encontramos ${genero} com idade ${idade}`
        resp.appendChild(img)
    }
}