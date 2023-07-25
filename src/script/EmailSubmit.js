const formContainer = document.querySelector(".form");
let title = document.createElement("h1");
let form = document.createElement("form");
let inputKey = document.createElement("input");
let redirectTo = document.createElement("input");
let inputName = document.createElement("input");
let inputEmail = document.createElement("input");
let textArea = document.createElement("textarea");
let enviar = document.createElement("input");

title.textContent = `Entre em contato!`;
form.method = `POST`;
form.action = `https://api.staticforms.xyz/submit`;

inputKey.type = `hidden`;
inputKey.name = `accessKey`;
inputKey.value = `7fc10402-ff26-4fa1-a1ab-74a9ed459220`;

redirectTo.type = `hidden`;
redirectTo.name = `redirectTo`;

inputName.type = `text`;
inputName.name = `name`;
inputName.placeholder = `Nome`;

inputEmail.type = `text`;
inputEmail.name = `email`;
inputEmail.placeholder = `Seu melhor e-mail`;

textArea.name = `message`;
textArea.placeholder = `Digite aqui sua mensagem...`;

enviar.value = `Enviar`;
enviar.type = `submit`;

enviar.addEventListener("click", (ev) => {
  let error = document.createElement("span");

  if (inputName.value === "" || inputEmail.value === "" || textArea.value === "") {
    ev.preventDefault();

    error.textContent = `⚠️ Preencha todos os campos!`;
    error.classList.add("emptyForm");

    setTimeout(() => {
      form.removeChild(error);
    }, 3000);
  }else{
    redirectTo.value = `https://micaelly.shop/success.html`;
  }

  form.appendChild(error);
});

form.append(redirectTo, inputKey, inputName, inputEmail, textArea, enviar);
formContainer.append(title, form);
