
const textBox = document.getElementById('textBox')
const toFhr = document.getElementById('toFhr')
const toCls = document.getElementById('toCls')
const result = document.getElementById('result')
const textBox2 = document.getElementById('textBox2')
const toMiles = document.getElementById('toMiles')
const toKm = document.getElementById('toKm')
const result2 = document.getElementById('result2')
const textBox3 = document.getElementById('textBox3')
const toKG = document.getElementById('toKG')
const toIB = document.getElementById('toIB')
const result3 = document.getElementById('result3')
let temp
let distance
let weight

function convert(){

    if(toFhr.checked){
        temp = textBox.value
        temp = Number(temp)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + '°F'

    }
    else if(toCls.checked){
        temp = textBox.value
        temp = Number(temp)
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(1) + '°C'

    }
    else{
        result.textContent = 'Select a unit'
    }
}


function convert2(){

    if(toMiles.checked){
        distance = textBox2.value
        distance = Number(distance)
        distance = distance/1.609344
        result2.textContent = distance.toFixed(2) + ' mi'
    }
    else if(toKm.checked){
        distance = textBox2.value
        distance = Number(distance)
        distance = distance*1.609344
        result2.textContent = distance.toFixed(2) + ' km'
    }
    else{
        result2.textContent = 'Please check desired converting option!'
    }
}

function convert3(){

    if(toKG.checked){
        weight = textBox3.value
        weight = Number(weight)
        weight = weight*0.45359
        result3.textContent = weight.toFixed(2) + ' kg'
    }

    else if(toIB.checked){
        weight = textBox3.value
        weight = Number(weight)
        weight = weight/0.45359
        result3.textContent = weight.toFixed(2) + ' ib'
    }

    else{
        result3.textContent = 'Please check desired converting option'
    }
}