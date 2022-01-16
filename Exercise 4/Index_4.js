function plus() {
    let numb1 = document.getElementById('input1').value
    let numb2 = document.getElementById('input2').value
    let plusResult = Number.parseInt(numb1) + Number.parseInt(numb2)
    resultContainer.innerHTML = "<h3>The result of the summation is: " + plusResult + "!</h3>";
};