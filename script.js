function carregar(){

var msg = document.getElementById("msg")
var msg_dia = document.getElementById("msg_dia")
var msg_ano = document.getElementById('msg_ano')
var msg_bomdia = document.getElementById('msg_bomdia')
var msg_boatarde = document.getElementById('msg_boatarde')
var msg_boanoite = document.getElementById('msg_boanoite')
var img = document.getElementById("imagem")

var dia = new Date()
var dd = dia.getDay()

var d = new Date()
var day = d.getDate()
var m = new Date()
var month = m.getMonth()
var y = new Date()
var year = y.getFullYear()

month +=1
var data = new Date()
var hora= data.getHours()
var minuto = new Date()
var min = minuto.getMinutes()
var segundo = new Date()
var sec = segundo.getSeconds()
var milisegundo = new Date()
var ms = milisegundo.getMilliseconds()
msg.innerHTML = `Agora são exatamente ${hora}:${min}:${sec}:${ms}`

msg_ano.innerHTML = `A data atual é ${day}/${month}/${year} `




switch(dd){
    case 0:
        msg_dia.innerHTML = `Hoje é Domingo!`
        break
    case 1:
        msg_dia.innerHTML = `Hoje é Segunda-Feira!`
        break
    case 2:
        msg_dia.innerHTML = `Hoje é Terça-Feira!`
        break
    case 3:
        msg_dia.innerHTML = `Hoje é Quarta-Feira!`
        break
    case 4:
        msg_dia.innerHTML = `Hoje é Quinta-Feira!`
        break  
    case 5:
        msg_dia.innerHTML = `Hoje é Sexta-Feira!`
        break
    case 6:
        msg_dia.innerHTML = `Hoje é Sábado!`
        break
}   


if(hora>= 0 && hora<12){
    msg_bomdia.innerHTML = 'Bom Dia!'
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora>=12 && hora<18){
    msg_boatarde.innerHTML = 'Boa Tarde!'
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else{
    msg_boanoite.innerHTML = 'Boa Noite!'
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}


}

