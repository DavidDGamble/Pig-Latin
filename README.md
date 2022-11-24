
# _Pig Latin_

#### By _**David Gamble & Ryan Krueg**_

#### _Translates user input to pig latin._

## Technologies Used

* HTML
* JavaScript

## Description

_This is a website that will take a users input and display the input translated to pig latin._

## Setup/Installation Requirements

* _Clone the project directory using the link https://github.com/DavidDGamble/Pig-Latin.git._
* _open the index.html file_

## Known Bugs

* _No known bugs._

## License

_Copyright (c) 2022 David Gamble and Ryan Krueg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

```Describe: beginsWithAVowel()

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
Expected Output: "Iway eallyray enjoyway odingcay!"```
