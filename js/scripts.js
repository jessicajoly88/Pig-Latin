var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var first_letter = word.charAt(0);

  if (vowels.indexOf(first_letter) !== -1) {
    return word.concat("ay");
  } else {
    return word;
  }

};
