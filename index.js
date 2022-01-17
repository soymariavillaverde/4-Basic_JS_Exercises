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
