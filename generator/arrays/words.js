
// function getword() {
//     return Math.floor(Math.random() * words.length);
// }

// function generateWord() {
//     const generatedWord = getWord();
//     document.getElementById("generatedWord").value = word[generatedWord];
// }

function generateWord() {
    let getWord = Math.floor(Math.random() * words.length);
    let generatedword = words[getWord];
    document.getElementById("word").value = generatedword;
}

function copyWord() {
    var copyText = document.getElementById("word");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}