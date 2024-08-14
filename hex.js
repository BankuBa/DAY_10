const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.querySelector(".flipper_button");

let background = document.querySelector(".container");
let colorName = document.querySelector(".color_name");

button.addEventListener("click", () => {
  let hexValue = "#";

  for (i = 0; i < 6; i++) {
    let randomValue = Math.floor(Math.random() * hex.length);
    hexValue += hex[randomValue];
    console.log(hexValue);
    background.style.background = hexValue;
    colorName.innerHTML = `Color : ${hexValue}`
  }
});
