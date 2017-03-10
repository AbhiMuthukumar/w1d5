module.exports = {
  word: "Hello World!",
  printWord: function(){
    console.log(`The word returned from private function is ${returnWord(this.word)}`);
  }
};

function returnWord(word){
  return word;
};
