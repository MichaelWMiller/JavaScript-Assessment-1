// //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// // careful not to uppercase the i in the word pair
// var sentence = 'When i went to the mall i bought a pair of shoes.';
// console.log(sentence.replace(/ i /g, " I "));




// //2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

// var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

// function counta(str) {

//     var arrStr = jsHistory.split('');
//     var counta = 0;
//     var acount = 0;
//     for (var i = 0; i < arrStr.length; i++) {
//         if (arrStr[i] == "a" || arrStr[i] == "A") {
//             counta++;
//         }
//         acount = counta;
//     }
//     return acount;
// }

// console.log(counta(jsHistory));

// //3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
// //I SCREAM, you SCREAM, we all SCREAM for icecream

// var text = 'I scream, you scream, we all scream for icecream';

// function chkScream(str) {
//     var arrText = str.split(" ");
//     var scrm = "scream";
//     var scrmComma = "scream,"
//     for (var i = 0; i <= arrText.length; i++) {
//         if (arrText[i] == scrm) {
//             arrText[i] = scrm.toUpperCase();
//         }
//         if (arrText[i] == scrmComma) {
//             arrText[i] = scrmComma.toUpperCase();
//         }
//     }
//     var outStr = arrText.join(' ');
//     return outStr;
// }
// console.log(chkScream(text));