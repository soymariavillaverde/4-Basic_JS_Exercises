function checkNumberOfA(){
    let phrase = document.getElementById('input').value;
    let phraseToString = phrase.toString();
    let findCharacter = phraseToString.match(/[a]/gi).length;
    

    if(findCharacter == null){
        resultContainer.innerHTML = "<h3>There are no a's on the phrase</h3>";
    }
    
    else{
        resultContainer.innerHTML = "<h3>There are " + findCharacter + " a's on the phrase</h3>";
    }

    return
}

// not finished