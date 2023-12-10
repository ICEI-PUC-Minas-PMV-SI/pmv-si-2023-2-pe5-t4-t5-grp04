let botaoDeLogar = document.getElementById('loginButton');
botaoDeLogar.addEventListener('click', (event) => {event.preventDefault(); logar();});

function logar() {
    let i = null;
    let verificaEmail = document.getElementById('email').value;
    let verificaSenha = document.getElementById('senha').value;
    let encontrouUsuario = false;

        const usuarioData = localStorage.getItem('usuarios');
        if (usuarioData) {
            usuarios = JSON.parse(usuarioData);
        }
        
        usuarios.forEach((usu, index) => {
        if (verificaEmail == usu.email && verificaSenha == usu.senha) {
            encontrouUsuario = true;
            i = index;
        }})
        if (i != null) {
            location.href = '../MeusPets/index.html';
        } else {
            alert("email ou senha incorretos");
        }}