(() => {
  // index.js
  var counter = 0;
  var counterElement = document.querySelector("#counter");
  var button = document.querySelector("#inc-button");
  button.addEventListener("click", () => {
    counter += 1;
    counterElement.innerText = counter;
  });
})();
