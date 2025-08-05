//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
  let amigo = document.getElementById('amigo').value;

  if (amigo.length === 0) {
    alert("Por favor, insira um nome.");
    return;
  };
    
  amigos.push(amigo);
  console.log(amigos);

  listaAmigos.innerHTML = '';

  amigos.forEach(amigo => {
    let itemAtual = document.createElement('li');
    itemAtual.innerHTML = amigo;
    listaAmigos.append(itemAtual);
  });

  document.getElementById('amigo').value = '';
}

function sortearAmigo() {
  let posicao = Math.floor(Math.random() * amigos.length);
  let amigo = amigos[posicao];
  let textoDeResultado = `O amigo secreto sorteado é: ${amigo}`;
  
  listaAmigos.innerHTML = '';

  resultado.innerHTML = textoDeResultado;

  console.log(posicao);
}

