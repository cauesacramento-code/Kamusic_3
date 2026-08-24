// Agrupa os botões de alternância em um array para gerenciar o comportamento tanto no layout Desktop quanto no Mobile (@media screen and (max-width: 570px)) de forma unificada.
const botoesTema = [
document.getElementById("themeToggleDesktop"),
document.getElementById("themeToggleMobile")
];

// Mapeia os ícones correspondentes que terão suas classes de fontes manipuladas para refletir visualmente o estado do tema ativo.
const iconesTema = [
document.getElementById("themeIconDesktop"),
document.getElementById("themeIconMobile")
];


function atualizarTema() {

// Verifica a presença da classe '.light-theme', gatilho responsável por injetar as cores claras mapeadas no arquivo CSS.
const temaClaro =
document.body.classList.contains("light-theme");


iconesTema.forEach((icone) => {

// Cláusula de salvaguarda (guard clause): evita falhas críticas caso um dos ícones não exista no DOM atual (ex: elemento ocultado por regras de responsividade).
if (!icone) return;

// O segundo parâmetro força a adição da classe se a condição for verdadeira, ou a remoção se for falsa, chaveando dinamicamente entre os ícones de Sol e Lua.
icone.classList.toggle("fa-sun", temaClaro);
icone.classList.toggle("fa-moon", !temaClaro);

});

}


// Recupera o estado persistido no armazenamento local do navegador para manter as preferências do usuário mesmo após o carregamento da página.
const temaSalvo =
localStorage.getItem("temaPreferido");


// Sincroniza o estado inicial do DOM com o valor persistido antes de renderizar os estilos base do tema escuro padrão.
if (temaSalvo === "claro") {

document.body.classList.add("light-theme");

}


// Executa a primeira verificação para sincronizar o estado visual dos ícones assim que o script é interpretado.
atualizarTema();


botoesTema.forEach((botao) => {

// Previne erros de execução caso o botão do modo desktop ou mobile esteja ausente na estrutura HTML renderizada.
if (!botao) return;


botao.addEventListener("click", () => {

// Alterna a classe global no corpo do documento, fazendo com que o CSS aplique a transição suave de 0.3s configurada nas propriedades de background e color.
document.body.classList.toggle("light-theme");


const claro =
document.body.classList.contains("light-theme");


// Salva a string correspondente no LocalStorage, garantindo a persistência de dados em formato de chave-valor.
localStorage.setItem(
"temaPreferido",
claro ? "claro" : "escuro"
);


// Atualiza os ícones após a inversão do estado da classe no body.
atualizarTema();

});

});

// Faz o retângulo aparecer e desaparecer ao abrir o site.

function retanguloDesativar(){
const retangulo = document.getElementById('grifar-nome-login');
const nomeLogin = document.getElementById('nome-login')

retangulo.style.width = '150px';
nomeLogin.style.opacity = '1';

if (retangulo) {
setTimeout(() => {
retangulo.style.width = '10px';
retangulo.style.height = '0px';
nomeLogin.style.opacity = '0';
}, 4000);
}
}

document.addEventListener('DOMContentLoaded', (event) => {
retanguloDesativar()
});