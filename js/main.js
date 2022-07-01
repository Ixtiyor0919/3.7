//Currency exchange
var elForm = document.querySelector('.form');
var elNameInput = elForm.querySelector('.form__control');
var elResultBox = elForm.querySelector('.form__resultbox');
var elUsdSelect = elForm.querySelector('.form__select');
var usd = document.querySelector('.valyuta-usd')
var rubl = document.querySelector('.valyuta-rubl')
var euro = document.querySelector('.valyuta-euro')

getValyuta().then(result => {
    result.filter(item => {
        if(item.code === "USD") {
            usd.textContent = item.cb_price
        }
        if(item.code === "RUB") {
            rubl.textContent = item.cb_price
        }
        if(item.code === "EUR") {
            euro.textContent = item.cb_price
        }
        console.log(item);
    })
})

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    elNameInput.value.trim();
    var currencyInput = elNameInput.value;

    if(currencyInput <= 0 || isNaN(currencyInput)) {
        elNameInput.style.border = '2px solid white';
        elNameInput.style.background = 'red';
    }else {
        elResultBox.classList.add('valyuta-tranlate')
    }

    let selectValue = elUsdSelect.value
    getValyuta().then(result => {
        result.find(item => {
            if(selectValue == item.code) {
                elResultBox.textContent = `${(currencyInput / (item.cb_price)).toFixed(2)} $`;
            }
        })
    });
})