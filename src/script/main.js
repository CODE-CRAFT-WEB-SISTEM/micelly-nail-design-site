let logo = document.querySelector('img[alt="logo"]');
let disponible = document.getElementById('disponible');
let BancoDeHoras = document.createElement('p');

// Alterar logo
logo.src = './src/images/logo.png';

// Horas de disponibilidade
let horas = new Date().getHours();
let diaSemana = new Date().getDay();

if (diaSemana === 0 || horas < 9 || horas >= 18) {
  BancoDeHoras.classList.add('close');
  BancoDeHoras.textContent = `🔴 Fechado`;
} else {
  BancoDeHoras.classList.add('open');
  BancoDeHoras.textContent = `🟢 Aberto`;
}

disponible.appendChild(BancoDeHoras);

