const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let button = document.querySelector(".flipper_button");

let currentIndex;

button.addEventListener("click", () => {
  let background = document.querySelector(".container");
  let colorName = document.querySelector(".color_name");
  currentIndex = Math.floor(Math.random() * colors.length);
  background.style.backgroundColor = colors[currentIndex];
  colorName.innerHTML = `Color : ${colors[currentIndex]}`;

  if (currentIndex > colors.length) {
    currentIndex = 0;
    colorName.innerHTML = `Color : ${colors[3]}`;
  }
});
