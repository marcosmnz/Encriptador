let userInput = document.querySelector("#userInput");
let encryptBttn = document.querySelector("#button-encrypt");
let disencryptBttn = document.querySelector("#button-disencrypt");
let ecnryptedTextContainer = document.querySelector(".rectangle-1");
let copyBttn = document.querySelector(".copyBttn");

const encrypt = () => {
  if (
    userInput.value == "" ||
    /[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(
      userInput.value
    )
  ) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Verifique que el campo no esté vacío ni tenga carácteres especiales.',
      });
    userInput.value = "";
  } else {
    let encryptedText = userInput.value;
    encryptedText = encryptedText.replaceAll("e", "enter");
    encryptedText = encryptedText.replaceAll("i", "imes");
    encryptedText = encryptedText.replaceAll("a", "ai");
    encryptedText = encryptedText.replaceAll("o", "ober");
    encryptedText = encryptedText.replaceAll("u", "ufat");
    userInput.value = "";
    printText(encryptedText);
  }
};

const disencrypt = () => {
    if (
      userInput.value == "" ||
      /[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(
        userInput.value
      )
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Verifique que el campo no esté vacío ni tenga carácteres especiales.',
          });
      userInput.value = "";
    } else {
      let encryptedText = userInput.value;
      encryptedText = encryptedText.replaceAll("enter", "e");
      encryptedText = encryptedText.replaceAll("imes", "i");
      encryptedText = encryptedText.replaceAll("ai", "a");
      encryptedText = encryptedText.replaceAll("ober", "o");
      encryptedText = encryptedText.replaceAll("ufat", "u");
      userInput.value = "";
      printText(encryptedText);
    }
  };


  const printText = (textEncrypted) => {
    ecnryptedTextContainer.innerHTML = "";
    ecnryptedTextContainer.innerHTML = `<div class="textEncrypterContainer">
    <p class="textEncrypted" id="finalText">${textEncrypted}</p>
</div>`;
  };

  const copyText = () => {
    let textInsideButton = document.querySelector("#textButton")
    let codeSnippet = document.getElementById('finalText');
    let select = document.createRange();
    select.selectNodeContents(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(select);
    let res = document.execCommand('copy');
    window.getSelection().removeRange(select);
  
    textInsideButton.textContent = "COPIED"
    setTimeout(() => { textInsideButton.textContent = "COPY TEXT"; }, 3000);
  
  }
  





encryptBttn.addEventListener("click", encrypt);
disencryptBttn.addEventListener("click", disencrypt);
copyBttn.addEventListener("click", copyText);


