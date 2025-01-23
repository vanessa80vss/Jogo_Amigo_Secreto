//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomes = [];

let inputAmigo = document.getElementById('amigo'); 
let listaAmigos = document.getElementById('listaAmigos'); 

function adicionarAmigo() {
    let nome = inputAmigo.value; 

    if (nome === null || nome === '') {
        alert('Por favor, digite um nome válido');
        return; 
    }

    if (listaNomes.includes(nome)) {
        alert('Atenção! Nome repetido, digite outro nome!');
    } else {
        listaNomes.push(nome);

        atualizarLista();

        inputAmigo.value = '';
    }
}

function atualizarLista() {
    
    listaAmigos.innerHTML = '';

    
    listaNomes.forEach((nome) => {
        let novoItem = document.createElement('li'); 
        novoItem.innerText = nome; 
        listaAmigos.appendChild(novoItem); 
    });
}

function sortearAmigo() {
    if(listaNomes.length === 0) {
        alert('Não existem nomes cadastrados, adicione nomes antes de sortear');
        return;
    }
        let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
        let nomeSorteado = listaNomes[indiceSorteado];

        //poderia mostrar o resultado com um alert 
       // alert(`O nome sorteado foi: ${nomeSorteado}`);

        let resultado = document.getElementById('resultadoSorteio');
        resultado.innerHTML = (`O nome sorteado foi: ${nomeSorteado}!`);
    }



/* Opção para remover nome repetido

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert('Não existem nomes cadastrados, adicione nomes antes de sortear');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    let nomeSorteado = listaNomes[indiceSorteado];

    listaNomes.splice(indiceSorteado, 1); //removendo o nome sorteado

    atualizarLista(); // caso necessário exibir a lista sendo reduzida

    let resultado = document.getElementById('resultadoSorteio');
    resultado.innerHTML = `O nome sorteado foi: ${nomeSorteado}`;
}
    */
