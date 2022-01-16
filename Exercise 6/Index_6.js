    function biggestNumber(){
        let numb1 = Number.parseInt(document.getElementById('input1').value)
        let numb2 = Number.parseInt(document.getElementById('input2').value)
        let numb3 = Number.parseInt(document.getElementById('input3').value)

        let result = Math.max(numb1,numb2,numb3)


        resultContainer.innerHTML = "<h3> The biggest number is " + result + "!</h3>";
    }


        //-------------------------------- ANOTHER SOLUTION -------------------------------//

    /* function biggestNumber(){
        let numb1 = Number.parseInt(document.getElementById('input1').value)
        let numb2 = Number.parseInt(document.getElementById('input2').value)
        let numb3 = Number.parseInt(document.getElementById('input3').value)

        if ((numb1) > (numb2) && (numb1) > (numb3)){
            resultContainer.innerHTML = "<h3> The biggest number is " + numb1 + "!</h3>";
        }
        else if ((numb2) > (numb1) && (numb2) > (numb3)){
           resultContainer.innerHTML = "<h3> The biggest number is " + numb2 + "!</h3>";
        }
        else
          resultContainer.innerHTML = "<h3> The biggest number is " + numb3 + "!</h3>";
    } */
