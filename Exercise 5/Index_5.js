
function biggestNumber(){
    let numb1 = Number.parseInt(document.getElementById('input1').value)
    let numb2 = Number.parseInt(document.getElementById('input2').value)

        if (numb1 > numb2){
            resultContainer.innerHTML = "<h3>" + numb1 + " is bigger than " + numb2 + "!</h3>";
        }
        else
            resultContainer.innerHTML = "<h3>" + numb2 + " is bigger than " + numb1 + "!</h3>";
        }