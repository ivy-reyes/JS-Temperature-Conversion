var temp = 0;
document.getElementById("fahrenheit").disabled = true;
document.getElementById("kelvin").disabled = true;
document.getElementById("rankine").disabled = true;

function getTemp() {
    temp = document.getElementById("celsius").value;
}


function convert() {
    document.getElementById("fahrenheit").value = convertToF();
    document.getElementById("kelvin").value = convertToK();
    document.getElementById("rankine").value = convertToR();
}

function reset() {
    temp = 0;

    document.getElementById("celsius").value = 0;
    document.getElementById("fahrenheit").value = 0;
    document.getElementById("kelvin").value = 0;
    document.getElementById("rankine").value = 0;
}

function convertToF() {
    let tempF = temp * 1.8 + 32;
    return parseFloat(tempF).toFixed(2) + " °F";
}

function convertToK() {
    let tempK = temp + 273.15;
    return parseFloat(tempK).toFixed(2) + " K";
}

function convertToR() {
    let tempR = temp * 1.8 + 491.67;
    return parseFloat(tempR).toFixed(2) + " R";
}