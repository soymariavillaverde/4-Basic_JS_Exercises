function checkIfDivisibleByTwo(){
    let numb = Number.parseInt(document.getElementById('input').value)

    if (numb% 2 === 0){
        resultContainer.innerHTML = "<h3>" + numb + " is divisible by two</h3>";
    }

    else{
        resultContainer.innerHTML = "<h3>" + numb + " is not divisible by two</h3>";
    }
}