let smallLots = document.getElementsByClassName('small-lot-btn')
let multiLots = document.getElementsByClassName('multi-lot-btn')

for (let smallLot of smallLots) {
    smallLot.addEventListener('click', lotSelected)

    function lotSelected() {
        smallLot.parentElement.style.backgroundColor = "red"
        smallLot.innerHTML = '<h1>Booked</h1>'
        setTimeout(
            () => {
                smallLot.parentElement.style.backgroundColor = "purple";
                smallLot.textContent = "I'm free, book me";
                smallLot.previousElementSibling.style.display = 'block';
            }, 5400000)
    }
}

for (let multiLot of multiLots) {
    multiLot.addEventListener('click', lotSelected)

    function lotSelected() {
        multiLot.parentElement.style.backgroundColor = "blue"

        multiLot.innerHTML = '<h1>Booked</h1>'
        setTimeout(
            () => {
                multiLot.parentElement.style.backgroundColor = "purple";
                multiLot.textContent = "I'm free, book me";
                multiLot.previousElementSibling.classList.remove('renew-btn');
            }, 5400000)
    }
}

