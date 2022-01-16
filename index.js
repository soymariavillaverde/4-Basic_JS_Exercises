//Ejercicio 1

    //document.write('Hello world!')


//Ejercicio 2:

    //document.write(3+5)


//Ejercicio 3:

/*     let usrName = prompt ("Por favor, dime tu nombre")
    document.write('Hello ' + usrName + '!') */


//Ejercicio 4:

    /* let numb1 = prompt ("Por favor, dame un número")
    let numb2 = prompt ("Por favor, dame otro número")
    let suma = Number.parseInt(numb1) + Number.parseInt(numb2)
    document.write('La suma de tus números es: ' + suma + '!') */


                        /*{} <input id="input1" type="number" placeholder="Número 1">
                        <input id="input2" type="number" placeholder="Número 2">
                        <button onclick="plus()">Add</button>
                        <section id="resultContainer"></section>

                        function plus() {
                            let number1 = parseInt(document.getElementById('input1').value);
                            let number2 = parseInt(document.getElementById('input2').value);
                            let plusResult = (number1+number2);
                            resultContainer.innerHTML = `<p>El resultado es: ${plusResult}</p>`;
                        };
                    }*/


//Ejercicio 5: 

    /* let numb1 = prompt ("Por favor, dame un número")
    let numb2 = prompt ("Por favor, dame otro número")


    function biggestNumber(){
        if (parseInt(numb1) > parseInt(numb2)){
            document.write('El número mayor es ' + numb1)
        }
        else
            document.write('El número mayor es ' + numb2);
        } */


//Ejercicio 6: Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

        /*function biggestNumber(){
        let numb1 = prompt ("Por favor, dame un número")
        let numb2 = prompt ("Por favor, dame otro número")
        let numb3 = prompt ("Por favor, dame otro número")

        if (parseInt(numb1) > parseInt(numb2, numb3) && parseInt(numb1) > parseInt(numb3)){
             document.write('El número mayor es ' + numb1)
        }
        else if (parseInt(numb2) > parseInt(numb1) && parseInt(numb2) > parseInt(numb3)){
             document.write('El número mayor es ' + numb2)
        }
        else
             document.write('El número mayor es ' + numb3);
        }

        biggestNumber() */


        //--------------------------------SOLUCIÓN ALTERNATIVA-------------------------------
        

            /*function biggestNumber(){
                let numb1 = prompt ("Por favor, dame un número")
                let numb2 = prompt ("Por favor, dame otro número")
                let numb3 = prompt ("Por favor, dame otro número")

                let result = Math.max(parseInt(numb1),parseInt(numb2),parseInt(numb3))

                document.write(result)
                
            }

            biggestNumber() */


//Ejercicio 7: Escribe un programa que pida un número y diga si es divisible por 2

        /* let numb1 = prompt ("Por favor, dame un número")

        function divisibleTest(){
            if (parseInt(numb1)% 2 === 0){
                document.write("El número es divisible entre 2")
            }

            else{
                document.write("El número NO es divisible entre 2")
            }

        }

        divisibleTest() */


//Ejercicio 8: Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

        /* let phrase = prompt("Introduce una frase");
        let findCharacter = phrase.match(/[a]/gi).length
        document.write(findCharacter)
 */

//Ejercicio 9: Escribe un programa que pida una frase y escriba las vocales que aparecen

/*              let phrase = prompt("Introduce una frase");
                let findAllVowels= phrase.match(/[aeiou]/gi);
                document.write(findAllVowels); */

//Ejercicio 10: Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

        /* let phrase = prompt("Introduce una frase");
        let findVocals = phrase.match(/[aeiou]/gi).length
        document.write(findVocals) */

//Ejercicio 11: Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

        let phrase = prompt("Introduce una frase");

        let findA = phrase.match(/[a]/gi).length;
        let findE = phrase.match(/[e]/gi).length;
        let findI = phrase.match(/[i]/gi).length;
        let findO = phrase.match(/[o]/gi).length;
        let findU = phrase.match(/[u]/gi).length;

        document.write("Hay " + findA + " letras a " );
        document.write("Hay " + findE + " letras e " );
        document.write("Hay " + findI + " letras i " );
        document.write("Hay " + findO + " letras o " );
        document.write("Hay " + findU + " letras u " );
