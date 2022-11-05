
const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let grams = v; 

btn.addEventListener('click', function() {
  result.textContent = `Ounces = ${calculateOunces().toFixed(5)}`;
})

function calculateOunces() {
  return Number(grams.value) * 0.035274;
}