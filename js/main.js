//Currency exchange
var elForm = document.querySelector('.form');
var elNameInput = elForm.querySelector('.form__control');
var elResultBox = elForm.querySelector('.form__resultbox');
var elUsdSelect = elForm.querySelector('.form__select');

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    elNameInput.value.trim();
    var currencyInput = elNameInput.value;

    if(currencyInput <= 0 || isNaN(currencyInput)) {
        elNameInput.style.border = '2px solid white';
        elNameInput.style.background = 'red';
    }else {
        elNameInput.style.background = '#1edd1e';
        elNameInput.style.border = '2px solid white';
    }
    let selectValue = elUsdSelect.value
    //     getValyuta().then(result => {
    //         result.filter(item => {
    //             selectValue == item.code
    //             elResultBox.textContent = `${(currencyInput / (item.cb_price)).toFixed(2)} $`;
    //             selectValue = ''
    //         })
    // });
    getValyuta().then(result => {
        result.filter(item => {
            selectValue == item.code
            elResultBox.textContent = `${(currencyInput / (item.cb_price)).toFixed(2)} $`;
        })
        selectValue = ''
});
    console.log(selectValue);
})


