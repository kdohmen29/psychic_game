// make an alphabet to check against so that when we press keys we can make sure that the user is pressing letters
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

// words that we want to choose from
var wordBank = ["vikings", "rams", "patriots"]

// bank for letters chosen
var wrongLettersChosenBank = []

// generate a random word from our choices
var index = Math.floor(Math.random() * wordBank.length)
var chosenWord = wordBank[index]

// Make a underscore word that has the same amount of underscores as our chosen word
var chosenWordArray = chosenWord.split('')

var underscoreArray = []
for (var i = 0; i < chosenWordArray.length; i++) {
    underscoreArray.push('_ ')
}

var underscoreString = underscoreArray.join('')


// Place the underscore into the DOM
document.getElementById('underscore-string').innerHTML = underscoreString


// listen to key pressed
document.addEventListener('keyup', function (event) {
    var key = event.key.toLowerCase();
    if (alphabet.includes(key)) {

        for (var i = 0; i < chosenWordArray.length; i++) {
            if (chosenWordArray[i] === key) {
                underscoreArray[i] = key;
                underscoreString = underscoreArray.join('');
                document.getElementById('underscore-string').innerHTML = underscoreString;
            }
        }

        if (chosenWordArray.includes(key) === false) {
            console.log('wrong letter ' + key);
            wrongLettersChosenBank.push(key)
            document.getElementById('wrong-letters-chosen-bank').innerHTML = wrongLettersChosenBank
        }
        // prevent the same letter from being guessed twice
        if (wrongLettersChosenBank.includes(key) === true) {
            alert("You've already gueses that letter!")
        }



    } else {
        console.log('character not recognized');
    }



})

// when the letter is pressed we need to replace underscore with the letter
// we update the dom with the new underscoreString



console.log(chosenWordArray);
console.log(underscoreString);
console.log(alphabet);