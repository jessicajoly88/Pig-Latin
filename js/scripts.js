var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");
  var first_letter = letters[0];
console.log(first_letter)
  if (vowels.indexOf(first_letter) !== -1) {
    return word.concat("ay");
  } else {
        do {
          letters.push(letters.shift());
          first_letter = letters[0];
console.log(letters)
          }
        while(vowels.indexOf(first_letter) === -1);

        var newWord = letters.join("");
        var pigWord = newWord.concat("ay");
        return pigWord;
  }
};
