const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('#counter').firstElementChild;
const incrementBtnRef = document.querySelector('#counter').lastElementChild;

decrementBtnRef.addEventListener('click',  ondecrementBtnClick);

incrementBtnRef.addEventListener('click',  onincrementBtnClick);

function onincrementBtnClick() {

    let counterValue = counterValueRef.textContent;
    counterValueRef.textContent = Number(counterValue) + 1;
    return counterValue;
};

function ondecrementBtnClick() {
    
    let counterValue = counterValueRef.textContent;

    if ((Number(counterValue) - 1) < 0) {
        return counterValue;
    };

    counterValueRef.textContent = (Number(counterValue) - 1);
    return counterValue;
};

