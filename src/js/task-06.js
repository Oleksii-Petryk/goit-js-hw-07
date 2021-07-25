const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('focus', onInputValidationFocus);
validationInputRef.addEventListener('blur', onInputValidationBlur);

function onInputValidationFocus() {
    return validationInputRef.classList.remove('invalid','valid');
};

function onInputValidationBlur() {
    if (validationInputRef.value.length === 0) {
        return validationInputRef.classList.remove('invalid', 'valid');    
    } else
        if (validationInputRef.value.length !== Number(validationInputRef.getAttribute('data-length'))) {
     validationInputRef.classList.add('invalid');
    };
    return validationInputRef.classList.add('valid');
};

