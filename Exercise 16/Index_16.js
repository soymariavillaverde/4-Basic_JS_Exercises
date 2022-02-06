//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

function checkPrime(){
    let n = document.getElementById('input').value;
    //console.log(n);

    if ((n/2)){
        resultContainer.innerHTML =  "<h3>Number " + n + " is a prime number</h3>";
    } 

      else {
        resultContainer.innerHTML =  "<h3>Number " + n + " is not a prime number</h3>";
    }
    
      return
}