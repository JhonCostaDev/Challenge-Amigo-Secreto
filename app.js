//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//array para armazenar os amigos

let amigos = [];

//função para adicionar os amigos na lista.
function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if(amigo == '') {
        alert("Por favor, insira um nome válido.")
    }
    amigos.push(amigo);
   
    document.getElementById('amigo').value = '';
    atualizarListaAmigos(amigo);
}

function atualizarListaAmigos(item){
    let listaAmigos = document.getElementById("listaAmigos");
    let listItem = document.createElement('li');
    
    listItem.textContent = item;
    listaAmigos.append(listItem);
}


function sortearAmigo(){
    //limpar campo
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    //Gerar número aleatório para auxiliar no sorteio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    //Nome escolhido dentro do array.
    const amigoSorteado = (amigos[indiceAleatorio]!= undefined) ?amigos[indiceAleatorio]: 'Não exite amigos na lista.';
    
    
    //Variável que armazena o campo de resultado
    const resultado = document.getElementById('resultado')
    
    //Limpar campo
    resultado.innerHTML = '';
    
    //Variável para adicionar uma tag li ao ul do html
    const itemLi = document.createElement('li');

    const mensagemSorteada = (amigos[indiceAleatorio]!= undefined) ?`O amigo sorteado é: ${amigoSorteado}`: 'Não exite amigos na lista.';
    
    //Adicionar o conteúdo dentro da tag li
    itemLi.textContent = mensagemSorteada;

    //Exibir o resultado
    resultado.append(itemLi);
    
}
