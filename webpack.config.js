const path = require('path');

module.exports = {
  entry: {
    index: "./src/script/main.js",
    carousel: "./src/script/Carousel.js",
    whatsapp: "./src/script/Contact.js",
    textoAutomatico: "./src/script/textoAutomatico.js",
    emailSubmit: "./src/script/EmailSubmit.js",
    anuncios: "./src/script/Anuncio.js"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  }
}