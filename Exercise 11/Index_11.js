function countEachVowell(){
    let phrase = document.getElementById('input').value;
    let phraseToString = phrase.toString();
    let findA = phraseToString.match(/[a]/gi).length;
    let findE = phraseToString.match(/[e]/gi).length;
    let findI = phraseToString.match(/[i]/gi).length;
    let findO = phraseToString.match(/[o]/gi).length;
    let findU = phraseToString.match(/[u]/gi).length;
    
    console.log(findA);
    console.log(findE);
    console.log(findI);
    console.log(findO);
    console.log(findU);

    if(findA){
        resultContainer1.innerHTML = "<h3>There are " + findA +  " a's in the phrase</h3<br>";
    }
    else{
        resultContainer1.innerHTML = "<h3>There are no a's in the phrase</h3>";
    }

    if(findE){
        resultContainer2.innerHTML = "<h3>There are " + findE +  " e's in the phrase</h3<br>";
    }
    if(findI){
        resultContainer3.innerHTML = "<h3>There are " + findI +  " i's in the phrase</h3<br>";
    }
    if(findO){
        resultContainer4.innerHTML = "<h3>There are " + findO +  " o's in the phrase</h3<br>";
    }
    if(findU){
        resultContainer5.innerHTML = "<h3>There are " + findU +  " u's in the phrase</h3<br>";
    }
    
    else{
        resultContainer.innerHTML = "<h3>There are no vowels in the phrase</h3>";
    }

    return
}