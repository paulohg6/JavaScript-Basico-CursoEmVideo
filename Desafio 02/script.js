function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO Digite a data novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value )
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade>=0 && idade<10) {
                 //crianca
                 img.setAttribute('src' , 'littleboy.svg')
            }else if (idade<21) {
                //jovem
                img.setAttribute('src' , 'boy.svg')
            }else{
                //idoso
                img.setAttribute('src' , 'oldman.svg')
            }
        }else{
            genero = 'Mulher'
            if (idade<10) {
                //crianca
                img.setAttribute('src' , 'litlegirl.svg')
           }else if (idade<21) {
               //jovem
               img.setAttribute('src' , 'girl.svg')
           }else{
               //idoso
               img.setAttribute('src' , 'idosa.svg')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}