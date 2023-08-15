let anuncio = document.getElementById("anuncio");
//let video = document.createElement("video");
let imagem = document.createElement("img");
let closeVideo = document.createElement("button");
let contactRedirect = document.createElement("button");

//video.src = `./src/images/anuncios/promocao03.jpg`;
imagem.src = `src/images/anuncios/promocao03.jpeg`;
//video.autoplay = true;
//video.muted = true;
//video.loop = true;

closeVideo.textContent = `X`;
contactRedirect.textContent = `Agende um horário`;

setTimeout(() => {
  closeVideo.classList.add("closeVideoBtn");
  anuncio.classList.add("styleAnuncio");
  contactRedirect.classList.add("contactRedir");
  anuncio.append(contactRedirect, closeVideo, imagem);
}, 1000 * 6);

closeVideo.addEventListener("click", () => {
  anuncio.remove();
});

contactRedirect.addEventListener("click", () => {
  window.location.href = "https://wa.me/+556196718239";
});
