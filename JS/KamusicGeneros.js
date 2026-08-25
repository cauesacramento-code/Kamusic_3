const botoesArtistas = [
    document.getElementById("BB"),
    document.getElementById("BB1"),
    document.getElementById("BB2"),
    document.getElementById("BB3")
];

const cardsArtistas = [
    document.getElementById("Opencard"),
    document.getElementById("Opencard1"),
    document.getElementById("Opencard2"),
    document.getElementById("Opencard3")
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

        // Abre o conteúdo correspondente
        if (botao.checked) {
            cardsArtistas[indice].classList.add("aberto");
        }

    });

});