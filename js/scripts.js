function beginsWithAVowel(word) {
  let startsWithVowel = false;
  let vowel = ["a", "e", "i", "o", "u"];
  const wordArray = word.toLowerCase().split('');
  vowel.forEach(function(element) {
    if (wordArray[0] === element) {
      startsWithVowel = true;
    }  
  })
  return startsWithVowel;
}

function beginsWithAConsonant(word) {
  let wordArray = word.split('');
  const firstLetter = wordArray[0];
  wordArray.shift();
  return wordArray.join('') + firstLetter + 'ay';
}

function beginsWithQU(word) {
  let hasQU = false;
  let wordArray = word.toLowerCase().split('');
  if (wordArray[0] === 'q' && wordArray[1] === 'u') {
    hasQU = true;
  }
  return hasQU;
}

function qUSwap(word) {
  let wordArray = word.split("");
  const firstTwoLetters = wordArray[0] + wordArray[1];
  wordArray.shift();
  wordArray.shift();
  return wordArray.join("") + firstTwoLetters + "ay";
}

function pigLatinSentence(text) {
  let textArray = text.toLowerCase().split(" ");
  let newTextArray = []
  textArray.forEach(function(element) {
    newTextArray.push(pigLatin(element));
  })
return newTextArray.join(" ")
}

function pigLatin(word) {
  if (beginsWithAVowel(word) === true) {
    return word + 'way';
  } else if (beginsWithQU(word)){ 
    return qUSwap(word);
  }  else {
    return beginsWithAConsonant(word);
  }
}

console.log(pigLatinSentence("I really enjoy coding"))