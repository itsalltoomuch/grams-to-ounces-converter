### This is a sample of using HTML + JS file to make simple web page. It provides a tool to convert grams to ounces.

## Briefly introduction: 
Reference: https://www.calculatorful.com/grams-to-ounces

The Gram, also gramme, symbol “g”, is a unit of mass or weight in the metric system. Originally one gram was defined as equal to the mass of one cubic centimeter of pure water at 4 °C (39.2 °F) or a milliliter of pure water

The ounce, is a unit for measuring weight in the United States customary and British imperial systems of measurement, and one ounce is defined as one-sixteenth (1/16) of a pound (avoirdupois) or 28.35 grams

## Relationship between grams and ounces
To convert grams to ounces, you just need to remember 
```
Ounces = grams x  0.035274. 
```
Applying this formula, we can easily convert between them. For example, to convert [100 grams to ounces](https://www.calculatorful.com/grams-to-ounces)
```
Ounces = 100 × 0.035274 = 3.5274
```
## Steps to create the website
1. Create a html file with the content
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grams to Ounces Converter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <label for="v" id="variable">Grams</label>
  <input type="number" id="v"><br><br>

  <button id="btn">Calculate</button>

  <p id="result"></p>
  <script src="app.js"></script>
</body>
</html>
```
2. Create js file to define the function
```

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
```