const botoesArtistas = [
    document.getElementById("BB"),
    document.getElementById("BB1"),
    document.getElementById("BB2"),
    document.getElementById("BB3"),
    document.getElementById("BB4"),
    document.getElementById("BB5"),
    document.getElementById("BB6"),
    document.getElementById("BB7")
];

const cardsArtistas = [
    document.getElementById("Opencard"),
    document.getElementById("Opencard1"),
    document.getElementById("Opencard2"),
    document.getElementById("Opencard3"),
    document.getElementById("Opencard4"),
    document.getElementById("Opencard5"),
    document.getElementById("Opencard6"),
    document.getElementById("Opencard7")
];


botoesArtistas.forEach(function (botao, indice) {

    botao.addEventListener("change", function () {

        // Fecha todos os conteúdos
        cardsArtistas.forEach(function (card) {
            card.classList.remove("aberto");
        });

        // Desmarca os outros botões
        botoesArtistas.forEach(function (outroBotao) {
            if (outroBotao !== botao) {
                outroBotao.checked = false;
            }
        });

        // Se o botão atual estiver marcado, abre o conteúdo correspondente
        if (botao.checked) {
            cardsArtistas[indice].classList.add("aberto");
        }

    });

});