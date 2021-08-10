const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
};

function createBoxes(amount) {
  const boxSize = 30;
  const arr = []
    for (let i = 0; i < amount; i += 1) {
    let size = boxSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; margin-bottom: 10px; background-color: ${randomColor()}`;
    arr.push(div);
  }
  boxes.append(...arr);
};

function destroyBoxes() {
  boxes.innerHTML = "";
};

function randomColor() {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`;
};