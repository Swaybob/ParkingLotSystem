let smallLots = document.getElementsByClassName('small-lot-btn')
let multiLots = document.getElementsByClassName('multi-lot-btn')
let exitBtn = document.getElementsByClassName('renew-btn')




for (let smallLot of smallLots) {
    smallLot.addEventListener('click', lotSelected)

    function lotSelected() {
        let fee = 0;
        setInterval(() => {
            fee += 2.00;
            smallLot.textContent = `Fee: ${fee}`
        }, 60000)
        console.log(smallLot.previousElementSibling.classList)
        smallLot.previousElementSibling.classList.toggle('hide-renew-btn')
        smallLot.parentElement.style.backgroundColor = "white"
        smallLot.parentElement.style.backgroundImage = 'url("./asset/car.jpg")';
        smallLot.parentElement.style.backgroundPosition = 'center';
        smallLot.parentElement.style.backgroundRepeat = 'no-repeat';
        smallLot.parentElement.style.backgroundSize = 'cover';
        smallLot.innerHTML = '<h1>Booked</h1>'
        smallLot.removeEventListener('click', lotSelected)
        smallLot.addEventListener('click', () => {
            alert('This slot has been booked')
        })

        exitBtn.addEventListener('click', function displayFee() {
            smallLot.textContent = `Total Fee: ${fee} Time up`;

        })
    }
}
for (let multiLot of multiLots) {
    multiLot.addEventListener('click', lotSelected)

    function lotSelected() {
        let fee = 0;
        setInterval(() => {
            fee += 2.00;
            multiLot.textContent = `Fee: ${fee}`
        }, 60000)
        console.log(multiLot.previousElementSibling.classList)
        multiLot.previousElementSibling.classList.toggle('hide-renew-btn')
        multiLot.parentElement.style.backgroundColor = "white"
        multiLot.parentElement.style.backgroundImage = 'url("./asset/truck.jpg")';
        multiLot.parentElement.style.backgroundPosition = 'center';
        multiLot.parentElement.style.backgroundRepeat = 'no-repeat';
        multiLot.parentElement.style.backgroundSize = 'cover';
        multiLot.innerHTML = '<h1>Booked</h1>'
        multiLot.removeEventListener('click', lotSelected)
        multiLot.addEventListener('click', () => {
            alert('This slot has been booked')
        })

        exitBtn.addEventListener('click', function displayFee() {
            multiLot.textContent = `Total Fee: ${fee} Time up`;

        })
    }
}