const emailSalvo = localStorage.getItem('email')
const senhaSalvo = localStorage.getItem('senha')
const nomeUsuario = document.getElementById('nome-usuario');
const nomeUsuarioCell = document.getElementById('nome-login');

if (emailSalvo == null) {
    console.log('null')
}
else {
    nomeUsuario.textContent = 'Olá, ' + emailSalvo + '!';
    if (nomeUsuario.clientWidth > 100) {
        nomeUsuarioCell.textContent = 'Bem-vindo de volta!';
    }
    else{
        nomeUsuarioCell.textContent = 'Olá, ' + emailSalvo + '!';
    }
}

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function (event) {

    alert('Login feito com sucesso!')

    // Impede o recarregamento da página
    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');

    localStorage.setItem('email', inputEmail.value);
    localStorage.setItem('senha', inputSenha.value);

    nomeUsuario.textContent = 'Olá, ' + inputEmail.value + '!';

});