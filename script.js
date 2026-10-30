
function abrirHorarios() {
    const container = document.querySelector(".container");
    const phone = document.querySelector(".phone");

    container.classList.add("horarios-abertos");
    phone.classList.add("horarios-abertos");

    container.scrollTop = 0;
}

function fecharHorarios() {
    const container = document.querySelector(".container");
    const phone = document.querySelector(".phone");

    container.classList.remove("horarios-abertos");
    phone.classList.remove("horarios-abertos");

    container.scrollTop = 0;
}

const voltarTopo = document.querySelector(".voltarTopo");

voltarTopo.addEventListener("click", function () {
    const container = document.querySelector(".container");

    if (container.classList.contains("horarios-abertos")) {
        fecharHorarios();
    } else {
        alert("Voltando para a lista de produtos.");
    }
});


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
