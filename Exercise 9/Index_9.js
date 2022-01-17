function checkVowells(){
    let phrase = document.getElementById('input').value;
    let phraseToString = phrase.toString();
    let findVowells = phraseToString.match(/[aeiou]/gi);
    

    if(findVowells == null){
        resultContainer.innerHTML = "<h3>There are no vowells in the phrase</h3>";
    }
    
    else{
        resultContainer.innerHTML = "<h3>These are the vowels in the phrase: " + findVowells + "</h3>";
    }

    return
}