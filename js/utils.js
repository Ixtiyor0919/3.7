function getValyuta() {
    return new Promise((resolve, reject) => {
        fetch(`https://nbu.uz/exchange-rates/json`)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(err => reject(err))
        // setTimeout(() => {
        // },500)
    })
}