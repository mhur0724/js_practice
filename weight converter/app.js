let unit = document.getElementById('unit');
let input = document.getElementById('input');
let pounds = document.getElementById('lbsOutput');
let grams = document.getElementById('gramsOutput');
let kilograms = document.getElementById('kgOutput');
let oz = document.getElementById('ozOutput');

document.querySelectorAll('.card').forEach((div) => {
        div.style.display = 'none'; })



input.addEventListener('keyup', convertLbs);
unit.addEventListener('change',selectUnit);

function selectUnit(e) {
document.getElementById('input').placeholder = `Enter ${e.target.value}`;
console.log('hello');
document.querySelectorAll('.card').forEach((div) => {
    div.style.display = 'none';
})
if (e.target.value === "Pounds") {
    input.addEventListener('keyup', convertLbs);
} else if (e.target.value === "Grams") {
    input.addEventListener('keyup', convertGrams);
} else if (e.target.value === "Kilograms") {
    input.addEventListener('keyup', convertKg);
} else if (e.target.value === "Ounces") {
    input.addEventListener('keyup', convertOz);
}
}

function convertLbs() {
document.querySelectorAll('.card').forEach((div) => {
    div.style.display = 'block';
})
document.getElementById('output-pounds').style.display = 'none';
let lbs = input.value;
pounds.innerHTML = lbs;
grams.innerHTML = lbs/0.0022046;
kilograms.innerHTML = lbs/2.2046;
oz.innerHTML = lbs*16;
}
function convertGrams() {
document.querySelectorAll('.card').forEach((div) => {
    div.style.display = 'block';
})
document.getElementById('output-grams').style.display = "none";
let value = input.value;
grams.innerHTML = value;
pounds.innerHTML = value*0.0022046;
kilograms.innerHTML = value*100;
oz.innerHTML = value/16;
}
function convertKg() {
document.querySelectorAll('.card').forEach((div) => {
    div.style.display = 'block';
})
document.getElementById('output-kg').style.display = "none";
let value = input.value;
grams.innerHTML = value*100;
pounds.innerHTML = value*2.2046;
kilograms.innerHTML = value;
oz.innerHTML = value*35.274;
}
function convertOz() {
document.querySelectorAll('.card').forEach((div) => {
    div.style.display = 'block';
})
document.getElementById('output-oz').style.display = "none";
let value = input.value;
grams.innerHTML = value*28.3495;
pounds.innerHTML = value * 0.0625;
kilograms.innerHTML = value * 0.283495;
oz.innerHTML = value;
}