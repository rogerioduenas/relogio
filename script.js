function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    // pega a data
    var data = new Date();
    // pega a hora
    var hora = data.getHours();
    var minutos = data.getMinutes();
    //muda a cor de imagem e cor de fundo de acordo com a hora
    if (hora >= 0 && hora < 12){
        img.src = "./assets/manha.jpg";
        document.body.style.background = "rgb(140, 233, 140)";
        msg.innerHTML = `Agora são ${hora}:${minutos} <br>Bom Dia !`
    } else if (hora >= 12 && hora < 18){
        img.src = "./assets/tarde.jpg";
        document.body.style.background = "rgb(166, 208, 223)"
        msg.innerHTML = `Agora são ${hora}:${minutos} <br>Boa Tarde !`
    } else {
        img.src = "./assets/noite.jpg";
        document.body.style.background = "rgb(131, 4, 131)"
        msg.innerHTML = `Agora são ${hora}:${minutos} <br>Boa Noite !`
    }
}