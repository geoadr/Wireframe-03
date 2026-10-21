function mostrarHorario() {

    const horarios = document.getElementById("horarios");
    const botao = document.getElementById("btnHorario");

    if (horarios.style.maxHeight) {

        horarios.style.maxHeight = null;
        horarios.style.padding = "0 15px";
        botao.innerHTML = "Ver horários da semana";

    } else {

        horarios.style.maxHeight = "260px";
        horarios.style.padding = "12px 15px";
        botao.innerHTML = "Ocultar horários";

    }

}

const favorito = document.getElementById("favorito");

let favoritado = false;

favorito.addEventListener("click", function () {

    favoritado = !favoritado;

    if (favoritado) {

        favorito.innerHTML = "❤";
        favorito.style.color = "#d62839";
        favorito.style.transform = "scale(1.15)";

    } else {

        favorito.innerHTML = "♡";
        favorito.style.color = "#333";
        favorito.style.transform = "scale(1)";

    }

});

const voltar = document.querySelector(".voltar");

voltar.addEventListener("click", function () {

    alert("Voltando para a lista de produtos.");

});