let typedElement = document.getElementById("message");
let texts = ["Manicure", "Pedicure", "Decoração", "Botox Capilar", "Escova"];
let speed = 120;
let pauseTime = 1000;
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typedElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, pauseTime);
  }
}

function erase() {
  if (charIndex > 0) {
    typedElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, speed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, pauseTime);
  }
}

type();
