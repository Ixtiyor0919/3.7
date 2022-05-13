//Currency exchange
var elForm = document.querySelector('.form');
var elNameInput = elForm.querySelector('.form__control');
var elResultBox = elForm.querySelector('.form__resultbox');
var elUsdSelect = elForm.querySelector('.form__select');
var usd = 11141.80;
var rubl = 161.48;
var euro = 11757.94;

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    elNameInput.value.trim();
    var currencyInput = elNameInput.value;

    if(currencyInput <= 0 || isNaN(currencyInput)) {
        elNameInput.style.border = '2px solid white';
        elNameInput.style.background = 'red';
        elResultBox = '';
    }else {
        elNameInput.style.background = '#1edd1e';
        elNameInput.style.border = '2px solid white';
    }

    if(elUsdSelect.value === "usd") {
        elResultBox.textContent = `${(elNameInput.value / (usd)).toFixed(2)} $`;
    }else if(elUsdSelect.value === "rubl") {
        elResultBox.textContent = `${(elNameInput.value / (rubl)).toFixed(2)} P`;
    }else if(elUsdSelect.value === "euro") {
        elResultBox.textContent = `${(elNameInput.value / (euro)).toFixed(2)} €`;
    };
    // elNameInput.value = '';
    // elUsdSelect.value = '';
})
