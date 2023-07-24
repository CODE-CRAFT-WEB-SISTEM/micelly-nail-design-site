const whatsappFloat = document.getElementById("whatsappFloat");
const iconWhastapp = document.createElement("img");
const miniTexto = document.createElement("p");
const closeMiniTexto = document.createElement("span");

//Ícone de Whatsapp
iconWhastapp.src = "./src/images/icon-whatsapp.png";
iconWhastapp.classList.add("whatsapBtn");

setTimeout(() => {
  whatsappFloat.appendChild(iconWhastapp);

  iconWhastapp.addEventListener("click", () => {
    window.location.href = "https://wa.me/+556196718239";
  });
}, 1000 * 2);

//Cartão de msg
miniTexto.textContent = `Chama no Zap!`;
miniTexto.classList.add("miniTexto");

setTimeout(() => {
  whatsappFloat.appendChild(miniTexto);
}, 1000 * 6);

setTimeout(() => {
  whatsappFloat.removeChild(miniTexto);
}, 1000 * 38);
