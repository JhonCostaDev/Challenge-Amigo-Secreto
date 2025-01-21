//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//array para armazenar os amigos

let amigos = [];

//função para adicionar os amigos na lista.
function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;
    amigos.push(amigo);
   
    document.getElementById('amigo').value = '';
    atualizarListaAmigos(amigo);
}

function atualizarListaAmigos(item){
    let listaAmigos = document.getElementById("listaAmigos");
    let listItem = document.createElement('li');
    //listaAmigos.innerHTML = amigos;
    listItem.textContent = item;
    listaAmigos.append(listItem);
}
