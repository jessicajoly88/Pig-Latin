var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = word.split("");
  var first_letter = letters[0];



  if (vowels.indexOf(first_letter) !== -1) {
    return word.concat("ay");
  } else {
      do {
          if (first_letter === "q") {
          var q = letters.splice(0, 1);
          var u = letters.splice(0, 1);
          letters.push(q);
          letters.push(u);
          }

          letters.push(letters.shift());
          first_letter = letters[0];
          }

      while(vowels.indexOf(first_letter) === -1 );

      var newWord = letters.join("");
      var pigWord = newWord.concat("ay");
      return pigWord;
  }
};
