//Currency exchange
var elForm = document.querySelector('.form');
var elNameInput = elForm.querySelector('.form__control');
var elResultBox = elForm.querySelector('.form__resultbox');
var elUsdSelect = elForm.querySelector('.form__select');
var usd = (`11141.80`);
var rubl = (`161.48`);
var euro = (`11757.94`);

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    elNameInput.value.trim();
    if(elUsdSelect.value === "usd") {
        elResultBox.textContent = `${(elNameInput.value / (usd)).toFixed(0)} $`;
    }else if(elUsdSelect.value == "rubl") {
        elResultBox.textContent = `${(elNameInput.value / (rubl)).toFixed(0)} P`;
    }else if(elUsdSelect.value == "euro") {
        elResultBox.textContent = `${(elNameInput.value / (euro)).toFixed(0)} €`;
    };
    elNameInput.value = '';
    elUsdSelect.value = '';
})