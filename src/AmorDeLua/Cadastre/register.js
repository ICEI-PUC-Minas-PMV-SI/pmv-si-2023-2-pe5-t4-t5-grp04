let usuarios = [];

const frmUsuario = document.getElementById('registerForm');
frmUsuario.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioExistente = document.getElementById('email').value;

    const usuarioData = localStorage.getItem('usuarios');
    if (usuarioData) {
        usuarios = JSON.parse(usuarioData);
    }

    const usuarioJaExiste = usuarios.some((usu) => usu.email === usuarioExistente);

    if (usuarioJaExiste) {
        alert('Esse usuário já existe');
        location.href = "index.html";
    } else {
        usuarios.push({
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            email: usuarioExistente,
            senha: document.getElementById('senha').value
        });
        salvar();
        location.href = "../Login/index.html";
    }});

// const frmUsuario = document.getElementById('registerForm');
// frmUsuario.addEventListener('submit', (event) => {
//     event.preventDefault();
//     usuarios.push(
//         {
//             nome: document.getElementById('nome').value,
//             telefone: document.getElementById('telefone').value,
//             email: document.getElementById('email').value,
//             senha: document.getElementById('senha').value
//         }
//     )
//     salvar();
//     location.href = "../Login/index.html";
// })

// let botaoDeCadastrar = document.getElementById('registerButton');
// botaoDeCadastrar.addEventListener('submit', salvar());

function salvar() {
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
}