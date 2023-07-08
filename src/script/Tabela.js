let services = document.getElementById('services');

const Aplicacao = document.createElement('div');
const Manutencao = document.createElement('div');
const Decoracao = document.createElement('div');
const Manicure = document.createElement('div');
Aplicacao.className = 'cardPrices'
Manutencao.className = 'cardPrices'
Decoracao.className = 'cardPrices'
Manicure.className = 'cardPrices'

Aplicacao.innerHTML = '<h1>Aplicação</h1>'
Manutencao.innerHTML = '<h1>Manutenção</h1>'
Decoracao.innerHTML = '<h1>Decoração</h1>'
Manicure.innerHTML = '<h1>Manicure</h1>'

//PRECOS DOS CARDS
const aplicacao = [
  { nome: "Unhas de Fibra", preco: "R$ 100,00" },
  { nome: "Baby Boomer", preco: "R$ 115,00" },
  { nome: "Baby Color", preco: "R$ 110,00" },
  { nome: "Unhas de Gel", preco: "R$ 85,00" },
  { nome: "Banho de Gel", preco: "R$ 50,00" },
];

const manutencao = [
  { nome: "Unhas de fibra", preco: "R$ 70,00" },
  { nome: "Unhas de Gel", preco: "R$ 60,00" },
  { nome: "Banho de Gel", preco: "R$ 40,00" },
    { nome: "Reposição de Unha", preco: "R$ 10,00" }
];

const decoracao = [
  { nome: "Adesivos", preco: "R$ 2,00" },
    { nome: "Esmalte Gel", preco: "R$ 12,00" },
  { nome: "Pedraria", preco: "R$ 5,00" },
  { nome: "Encapsulado", preco: "R$ 20,00" },
];

const manicure = [
  { nome: "Manicure", preco: "R$ 20,00" },
  { nome: "Pedicure", preco: "R$ 20,00" },
  { nome: "Remoção de Alongamento", preco: "R$ 30,00" },
  { nome: "Cuticulas, Alongamento", preco: "R$ 5,00" },
];

function elementos(arr){
  let div = document.createElement('div');
  
  arr.forEach((item)=>{
    let h1 = document.createElement('h2')
    let h2 = document.createElement('h3')
    h1.textContent = item.nome
    h2.textContent = item.preco
    
    div.appendChild(h1)
    div.appendChild(h2)
  })
  return div
}

Aplicacao.appendChild(elementos(aplicacao))
Manutencao.appendChild(elementos(manutencao))
Decoracao.appendChild(elementos(decoracao))
Manicure.appendChild(elementos(manicure))

services.append(Manutencao, Aplicacao, Decoracao, Manicure);
