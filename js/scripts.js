var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");
  var first_letter = letters[0];

  if (vowels.indexOf(first_letter) !== -1) {
    return word.concat("ay");
  } else {
    letters.push(letters.shift());
    var newWord = letters.join("");
    var pigWord = newWord.concat("ay");
    return pigWord;
  }
};
