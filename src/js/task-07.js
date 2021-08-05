const fontSizeControllerRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControllerRef.setAttribute('min', '16');
fontSizeControllerRef.setAttribute('max', '72');
fontSizeControllerRef.setAttribute('value', '16');

fontSizeControllerRef.addEventListener('input', onfontSizeController);

function onfontSizeController() {
    textRef.style.fontSize = fontSizeControllerRef.value +"px";
};

