function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src='./imagens/manha.png'
    document.body.style.backgroundColor = '#e2cd9f'
} else if (hora >= 12 && hora <= 18){
    img.src='./imagens/tarde.png'
    document.body.style.backgroundColor = '#b9846f'
} else {
    img.src='./imagens/noite.png'
    document.body.style.backgroundColor = '#515154'
}
}