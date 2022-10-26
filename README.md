Describe: beginsWithAVowel()

Test: "Check to see if word begins with the vowels a,e,i,o, and u"
Code: beginsWithAVowel("Apples")
Expected Output: true

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Describe: beginsWithAConsonant()

Test: "It will move the first letter of word to the end of the word followed by "ay"."
Code: beginsWithAConsonant("bacon")
Expected Output: "aconbay"

Describe: beginsWithQU()

Test: "It will see if the first 2 letters in a word are "qu"."
Code:beginsWithQU("quick")
Expected Output: true

Describe: QUSwap()

Test: "For words beggining with "qu" it will move the first 2 letters of the word to the end of the word followed by "ay"."
Code: QUSwap("quest")
Expected Output: "estquay"

Describe: pigLatinSentence()

Test: "When user inputs multiple words, the text will change to piglatin"
Code: pigLatinSentence("I really enjoy coding")
Expected Output: "Iway eallyray enjoyway odingcay!"