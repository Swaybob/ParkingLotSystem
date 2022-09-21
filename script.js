let smallLots = document.getElementsByClassName('small-lot-btn')
let multiLots = document.getElementsByClassName('multi-lot-btn')
let table = document.getElementById('table')
let storeBtn = document.getElementById('store-btn')
let carDetails = {}

let carInterval;
let truckInterval;

storeBtn.addEventListener('click', () => {
    localStorage.setItem('Data', JSON.stringify(carDetails))
})

for (let smallLot of smallLots) {
    smallLot.addEventListener('click', lotSelected)

    function lotSelected() {
        console.log('clicked!')
        if (smallLot.textContent == "I'm free, book me") {

            let carReg = prompt('Car Registration No');
            if (carReg) {
                let carRow = document.createElement('tr')
                carDetails[carReg] = {
                    regNo: carReg,
                    timeSpent: 0,
                    fee: 0.00,
                    vehicleType: 'Car'
                }
                let carDetailRegNo = carDetails[carReg]['regNo']
                let carDetailTimeSpent = carDetails[carReg]['timeSpent']
                let carDetailFee = carDetails[carReg]['fee']
                let carDetailVehicleType = carDetails[carReg]['vehicleType']
                carRow.setAttribute('id', carReg)
                carRow.innerHTML = `<td>${carDetailRegNo}</td>
                <td>${carDetailTimeSpent}</td>
            <td>${carDetailFee}</td>
            <td>${carDetailVehicleType}</td>`
                table.appendChild(carRow)
                carInterval = setInterval(() => {

                    carDetails[carReg]['timeSpent']++
                    carDetails[carReg]['fee'] += 2
                    let matchDataRow = carRow.getAttribute('id')
                    matchDataRow = `${matchDataRow}`
                    let carDetailRegNoTable = carDetails[matchDataRow]['regNo']
                    let carDetailTimeSpentTable = carDetails[matchDataRow]['timeSpent']
                    let carDetailFeeTable = carDetails[matchDataRow]['fee']
                    let carDetailVehicleType = carDetails[matchDataRow]['vehicleType']
                    console.log(carDetails)
                    let updateData = document.getElementById(matchDataRow)
                    updateData.innerHTML = `<td>${carDetailRegNoTable}</td>
                <td>${carDetailTimeSpentTable}</td>
            <td>${carDetailFeeTable}</td>
            <td>${carDetailVehicleType}</td>`
                }, 60000)

                smallLot.parentElement.style.backgroundColor = "white"
                smallLot.parentElement.style.backgroundImage = 'url("./asset/car.jpg")';
                smallLot.parentElement.style.backgroundPosition = 'center';
                smallLot.parentElement.style.backgroundRepeat = 'no-repeat';
                smallLot.parentElement.style.backgroundSize = 'cover';
                smallLot.innerHTML = '<h1>Booked</h1>'
            }
            else {
                return
            }


        }
        else {

            alert('This slot has been booked')
            let confirmExit = confirm('Do you want to  exit the park?')
            if (confirmExit) {
                clearInterval(carInterval)
                smallLot.textContent = "I'm free, book me"

            } else { alert('Invalid Response') }

        }
    }
}

for (let multiLot of multiLots) {
    multiLot.addEventListener('click', lotSelected)

    function lotSelected() {
        if (multiLot.textContent == "I'm free, book me") {

            let carReg = prompt('Car Registration No');
            if (carReg) {
                let carRow = document.createElement('tr')
                carDetails[carReg] = {
                    regNo: carReg,
                    timeSpent: 0,
                    fee: 0.00,
                    vehicleType: 'Truck'
                }
                let carDetailRegNo = carDetails[carReg]['regNo']
                let carDetailTimeSpent = carDetails[carReg]['timeSpent']
                let carDetailFee = carDetails[carReg]['fee']
                let carDetailVehicleType = carDetails[carReg]['vehicleType']
                carRow.setAttribute('id', carReg)
                carRow.innerHTML = `<td>${carDetailRegNo}</td>
                <td>${carDetailTimeSpent}</td>
            <td>${carDetailFee}</td> <td>${carDetailVehicleType}</td>`
                table.appendChild(carRow)
                truckInterval = setInterval(() => {

                    carDetails[carReg]['timeSpent'] += 1
                    carDetails[carReg]['fee'] += 3
                    let matchDataRow = carRow.getAttribute('id')
                    matchDataRow = `${matchDataRow}`
                    let carDetailRegNoTable = carDetails[matchDataRow]['regNo']
                    let carDetailTimeSpentTable = carDetails[matchDataRow]['timeSpent']
                    let carDetailFeeTable = carDetails[matchDataRow]['fee']
                    let carDetailVehicleType = carDetails[matchDataRow]['vehicleType']
                    console.log(carDetails)
                    let updateData = document.getElementById(matchDataRow)
                    updateData.innerHTML = `<td>${carDetailRegNoTable}</td>
                <td>${carDetailTimeSpentTable}</td>
            <td>${carDetailFeeTable}</td> <td>${carDetailVehicleType}</td>`
                }, 60000)

                multiLot.parentElement.style.backgroundColor = "white"
                multiLot.parentElement.style.backgroundImage = 'url("./asset/truck.jpg")';
                multiLot.parentElement.style.backgroundPosition = 'center';
                multiLot.parentElement.style.backgroundRepeat = 'no-repeat';
                multiLot.parentElement.style.backgroundSize = 'cover';
                multiLot.innerHTML = '<h1>Booked</h1>'
            }
        } else {

            alert('This slot has been booked')
            let confirmExit = confirm('Do you want to  exit the park?')
            if (confirmExit) {
                clearInterval(truckInterval)
                multiLot.textContent = "I'm free, book me"

            } else { alert('Invalid Response') }

        }
    }
}