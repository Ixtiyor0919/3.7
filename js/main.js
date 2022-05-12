//Currency exchange
var elForm = document.querySelector('.form');
var elNameInput = elForm.querySelector('.form__control');
var elResultBox = elForm.querySelector('.form__resultbox');
var elUsdSelect = elForm.querySelector('.form__select');

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    elNameInput.value.trim();
    
    elResultBox.textContent =  elNameInput.value;
    elResultBox.textContent = elUsdSelect.value;
    elResultBox.textContent = (elNameInput.value / elUsdSelect.value).toFixed(0);
    // result.toFixed(0);
    elNameInput.value = '';
    elUsdSelect.value = '';
})