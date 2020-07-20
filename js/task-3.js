"use strict";

const findLongestWord = function(string) {
  const words = string.split(' ');
  let wordMaxLength = words[0];

  for (let i = 1; i < words.length; i += 1) {
   if (wordMaxLength.length < words[i].length) {
    wordMaxLength = words[i];
   }
  }
  return wordMaxLength;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));