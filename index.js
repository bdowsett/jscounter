let counter = 0;
const counterElement = document.querySelector("#counter");
const button = document.querySelector("#inc-button");

button.addEventListener("click", () => {
  counter += 1;
  counterElement.innerText = counter;
});
