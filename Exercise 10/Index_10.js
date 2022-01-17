function countVowells(){
    let phrase = document.getElementById('input').value;
    let phraseToString = phrase.toString();
    let countingVowells = phraseToString.match(/[aeiou]/gi).length;
    
    if(countingVowells == null){
        resultContainer.innerHTML = "<h3>There are no vowells in the phrase</h3>";
    }
    
    else{
        resultContainer.innerHTML = "<h3>There are " + countingVowells + " vowels in the phrase</h3>";
    }

    return
}

// not finished