const quantityInputRef = document.querySelector('#controls').firstElementChild;
const BtnsRef = document.querySelectorAll('#controls button');
const boxesRef = document.querySelector('#boxes');


 quantityInputRef.addEventListener('input', amount);

function amount () {
    return quantityInputRef.value;
};

BtnsRef[0].addEventListener('click', createBoxes);
BtnsRef[1].addEventListener('click', destroyBoxes);

function randomColor() {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`;
};

function boxHeight() {
    let height = 30;
    return height += 10;
};
 
function boxWidth() {
    let width = 30;
    return width += 10;
};

function createBoxes(amount) {
    const divRef = document.createElement('div');
    divRef.style.height = boxHeight() +"px";
    divRef.style.width = boxWidth() + "px";
    divRef.style.marginBottom = 10 + "px";
    divRef.style.backgroundColor = randomColor();
    return boxesRef.append(divRef);
};

function destroyBoxes() {
   return boxesRef.innerHTML = '';
};
