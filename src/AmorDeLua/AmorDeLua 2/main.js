// executa quando o html estiver carregado
document.addEventListener("DOMContentLoaded", () => {

    const nomeCard = "cards";
    let animal = [];

    const salvar = () => {
        localStorage.setItem(nomeCard, JSON.stringify(animal));
    }

    const deletar = (index) => {
        animal.splice(index, 1);
        salvar();
        load();
        location.reload();
    }

    const load = () => {
        const animalData = localStorage.getItem(nomeCard);
        if (animalData) {
            animal = JSON.parse(animalData);
        }
        const cardAnimal = document.getElementById(nomeCard);
        animal.forEach((ani, index) => {
            cardAnimal.innerHTML += `
                <main>
                    <img src="${ani.img}" alt="cachoAdoção">
                    <p>
                        Nome: ${ani.nome}
                    </p>
                    <p>
                        Porte: ${ani.porte}
                    </p>
                    <p>
                        Raça: ${ani.raca}
                    </p>
                    <p>
                        Data do Resgate: ${ani.data}
                    </p>
                    <p>
                        Telefone: ${ani.telefone}
                    </p>
                    <div>
                        <button class="excluir" data-index="${index}">excluir</button>
                        <a href="../AtuPet/index.html?id=${index}"><button>alterar</button></a>
                    </div>
                </main>
                
            `;
        });
        document.querySelectorAll(".excluir").forEach(excluir => {
            excluir.addEventListener("click", (event) => {
                deletar(event.target.dataset.index);
            })
        });

    };

    try {
        load();
    } catch (Ex) {

    }

    const frmAnimal = document.getElementById("frmAnimal");
    frmAnimal.addEventListener("submit", (event) => {
        event.preventDefault();
        animal.push({
            img: document.getElementById("img").value,
            nome: document.getElementById("nome").value,
            porte: document.getElementById("porte").value,
            raca: document.getElementById("raca").value,
            data: document.getElementById("data").value,
            telefone: document.getElementById("telefone").value,
        });
        salvar();
        // load();
        document.getElementById("img").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("porte").value = "";
        document.getElementById("raca").value = "";
        document.getElementById("data").value = "";
        document.getElementById("telefone").value = "";
    })

    const atu = document.getElementById("atu");
    const params = new URLSearchParams(window.location.search);
    atu.addEventListener("submit", (event) => {
        event.preventDefault();
        animal[params.get('id')] = ({
            img: document.getElementById("imgU").value,
            nome: document.getElementById("nomeU").value,
            porte: document.getElementById("porteU").value,
            raca: document.getElementById("racaU").value,
            data: document.getElementById("dataU").value,
            telefone: document.getElementById("telefoneU").value,
        });
        salvar();
        // load();
        document.getElementById("imgU").value = "";
        document.getElementById("nomeU").value = "";
        document.getElementById("porteU").value = "";
        document.getElementById("racaU").value = "";
        document.getElementById("dataU").value = "";
        document.getElementById("telefoneU").value = "";
    })


    const loadlimite = () => {
        const animalData = localStorage.getItem(nomeCard);
        if (animalData) {
            animal = JSON.parse(animalData);
        }
        const cardAnimal = document.getElementById("cardHome");
        animal.forEach((ani, index) => {

            if (index <= 3) {


                cardAnimal.innerHTML += `
                <main>
                    <img src="${ani.img}" alt="cachoAdoção">
                    <p>
                        Nome: ${ani.nome}
                    </p>
                    <p>
                        Porte: ${ani.porte}
                    </p>
                    <p>
                        Raça: ${ani.raca}
                    </p>
                    <p>
                        Data do Resgate: ${ani.data}
                    </p>
                    <p>
                        Telefone: ${ani.telefone}
                    </p>
                    
                </main>
            
            `;
            }

        });


    }
    const loadAdotar = () => {
        const animalData = localStorage.getItem(nomeCard);
        if (animalData) {
            animal = JSON.parse(animalData);
        }
        const cardAnimal = document.getElementById("adocaoCard");
        animal.forEach((ani, index) => {
            cardAnimal.innerHTML += `
                <main>
                    <img src="${ani.img}" alt="cachoAdoção">
                    <p>
                        Nome: ${ani.nome}
                    </p>
                    <p>
                        Porte: ${ani.porte}
                    </p>
                    <p>
                        Raça: ${ani.raca}
                    </p>
                    <p>
                        Data do Resgate: ${ani.data}
                    </p>
                    <p>
                        Telefone: ${ani.telefone}
                    </p>
                    
                </main>
                
            `;
        });
    }

    try {
        loadlimite();
    } catch (Ex) {

    }
    try {
        loadAdotar();
    } catch (Ex) {

    }

});

