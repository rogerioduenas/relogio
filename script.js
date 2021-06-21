function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
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
