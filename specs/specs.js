describe('pigLatin', function() {
  it("adds the letters ay to the end of a word that starts with a vowel", function() {
    expect(pigLatin("orange")).to.equal("orangeay");
  });
  it("if word begins with consonant, it removes the consonant and moves it to the end of the word + ay", function(){
    expect(pigLatin("red")).to.equal("edray");
  });
});
