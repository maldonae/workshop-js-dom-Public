console.log("hello world!");
const buttons = document.querySelectorAll("television__button");
for (const button of buttons) {
  button.addEventListener("click", () => {
    alert("Clic !");
  });
}
const buttonOn = document.querySelector(".television__button--on");
buttonOn.addEventListener("click", () => {
  // TODO
  const img = document.querySelector(".television__content");
  img.src = "https://picsum.photos/id/237/270/190?grayscale";
});
const buttonOff = document.querySelector(".television__button--off");
buttonOff.addEventListener("click", () => {
  // TODO
  const img = document.querySelector(".television__content");
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
});
const channelGrayscale = document.createElement("li");
channelGrayscale.classList.add("television__channel");
const channels = document.querySelector(".television__channels");
channels.appendChild(channelGrayscale);
const buttonGrayscale = document.createElement("button");
buttonGrayscale.type = "button";
buttonGrayscale.textContent = "T";
channelGrayscale.appendChild(buttonGrayscale);

buttonGrayscale.addEventListener("click", () => {
  // TODO
  const img = document.querySelector(".television__content");

  const isData = img.src.startsWith("data");

  if (!isData) {
    const isGrayscale = img.src.endsWith("?grayscale");

    if (isGrayscale) {
      // so sad this doesn't work :/
      // img.src -= "?grayscale";
      img.src = img.src.slice(0, -"?grayscale".length);
    } else {
      img.src += "?grayscale";
    }
  }
});
