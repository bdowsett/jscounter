/**
 * @jest-environment jsdom
 */

test("increases the number when clicked", () => {
  document.body.innerHTML = `<span id="counter">0</span>
  <button id="inc-button">Increment</button>`;
  require("../index");

  const counterElement = document.querySelector("#counter");
  const buttonElement = document.querySelector("#inc-button");

  for (let i = 1; i < 100; i++) {
    buttonElement.click();
    expect(counterElement.innerText).toBe(i);
  }
});
