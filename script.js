// Attach click event listener to the button
document.getElementById('findMinMaxBtn').addEventListener('click', function() {
findMinMax();
});

function findMinMax() {
// Get input values
var num1 = parseFloat(document.getElementById('input1').value);
var num2 = parseFloat(document.getElementById('input2').value);

// Check if the inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
document.getElementById('result').innerHTML = 'Please enter valid numbers.';
return;
}

// Find min and max values
var minValue = Math.min(num1, num2);
var maxValue = Math.max(num1, num2);

// Display the result
document.getElementById('result').innerHTML = 'Min Value: ' + minValue + '<br>Max Value: ' + maxValue;
}

