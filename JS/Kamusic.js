
const botoesTema = [
document.getElementById("themeToggleDesktop"),
document.getElementById("themeToggleMobile")
];

const iconesTema = [
document.getElementById("themeIconDesktop"),
document.getElementById("themeIconMobile")
];


function atualizarTema() {

const temaClaro =
document.body.classList.contains("light-theme");


iconesTema.forEach((icone) => {

if (!icone) return;

icone.classList.toggle("fa-sun", temaClaro);
icone.classList.toggle("fa-moon", !temaClaro);

});

}


const temaSalvo =
localStorage.getItem("temaPreferido");


if (temaSalvo === "claro") {

document.body.classList.add("light-theme");

}


atualizarTema();


botoesTema.forEach((botao) => {

if (!botao) return;


botao.addEventListener("click", () => {

document.body.classList.toggle("light-theme");


const claro =
document.body.classList.contains("light-theme");


localStorage.setItem(
"temaPreferido",
claro ? "claro" : "escuro"
);


atualizarTema();

});

});