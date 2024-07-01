// Test Method
// let myString="Hello World";
// let myRegex=/World/;
// console.log(myRegex.test(myString));

// Match Literal String
// let waldoIsHiding="Somewhere Waldo is hiding in this text.";
// let wr=/waldo/;
// let res=wr.test(waldoIsHiding);
// console.log(res);

// Match a Literal String with Different Possibilities
// let str="James has a pet cat."
// let regex=/dog|cat|bird|fish/;
// let res=regex.test(str);
// console.log(res);

// Ignore case while Matching
// i flag -- case insensitive
// let str="Pawan Chavan"
// let regex=/pawan/i;
// let res=regex.test(str);
// console.log(res);

// Extract Matches
// let str="Pawan Chavan"
// let regex=/Aniket/;
// let res=str.match(regex); // if not matches returns null
// console.log(res);

// find more then the first match
// g flag
// let str="Pawan pawan PaWan"
// let regex=/Pawan/ig;
// let res=str.match(regex);
// console.log(res);

// Match Anything with WildCard Period
// .
// let str="Hug hum"
// let regex=/hu./i;
// let res=str.match(regex);
// console.log(res);

// Match Anything with Wildcard Period
// let str="The rain in SPAIN stays mainly in the plain";
// let regex=/..ain/gi;
// let res=str.match(regex);
// console.log(res);

// let str="Let's have fun with regular expressions! run mun";
// let regex=/.un/;    // ends with un
// let res=str.match(regex);
// console.log(res);

// Match Single Character with Multiple Possibilities
// eg first letter is b last letter is g and in middle any of thes can be there [aiu]

// let str="Beware of bugs in the above code. bag big"
// let regex=/b[aiu]g/;
// Match Lowercase uppercase vowels
// let regex=/[aeiou]/ig;
// res=str.match(regex);
// console.log(res);

// Match Letters of the Alphabet
// let str="The spain won the FIFA wc in 2010";
// let alphas=/[a-z]/ig;
// let nums=/[0-9]/ig;    // counts numbers

// let combine=/[2-6h-s]/ig; // range of numbers from 2-6 and range of letters from h to s
// let res=str.match(combine);
// console.log(res);

// Match Single Characters Not Specified
// negated character set (Every thing except)
// let str="3 blind mice.";
// let regex=/[^0-9aeiou]/ig;
// let res=str.match(regex);
// console.log(res);

// Match Characters that Occur one of more times
// +
// let str="Mississipspi"
// let regex=/s+/g;
// let res=str.match(regex);
// console.log(res);

// Match characters that occur zero or more times
//* character
// let str="gooooooooal";
// let gPhrase="gut feeling";
// let oPhrase="over the moon"
// let regex=/go*/;
// let res=str.match(regex);
// console.log(gPhrase.match(regex));
// console.log(oPhrase.match(regex)); // null
// // console.log(res);      // gooooooo

// find Characters with Lazy Matching
// Greedy path  .    Regex patterns is default to lazy
// let str ="titanic";
// // let reg1=/t[a-z]*i/;   // greedy  op titani
// let reg1=/t[a-z]*?i/;   // lazy      op ti
// let res=str.match(reg1);
// console.log(res);

// let text="<h1>Winter is coming</h1>";
// // let reg2=/<.*>/;   // greedy
// let reg2=/<.*?>/;   // lazy
// let res1=text.match(reg2);
// console.log(res1);

// Find One or More Criminals in a Hunt
// let crowd='P1P2P3P4P5P6CCCP7P8P9';
// let crim=/C+/ig;     // Math one or more C
// let res=crowd.match(crim);
// console.log(res);

// // Match Beginning String Patterns
// let crowd="Cal and Ricky both like racing";
// let reg=/^Cal/;
// let res=reg.test(crowd);
// console.log(res);

// Match End String Patterns
// $
// let crowd="Cal and Ricky both like racing";
// let reg=/racing$/;
// let res=reg.test(crowd);
// console.log(res);

// Match all letters and Numbers
// \w matching any letter and underscore
// \d  digits
// \
// let crowd="Cal and Ricky both like racing";
// let reg=/\w/g;
// let res=crowd.match(reg).length;
// console.log(res);

// Match Everything but letters and Numbers
// \W
// let crowd="Cal and Ricky both like racing.";
// let reg=/\W/g;      // spaces numbers and .dot
// let res=crowd.match(reg).length;
// console.log(res);

// Match all Numbers
// \d  all numbers
// \D all non Numbers
// let crowd="Cal and Ricky both like racing $5.00";
// // let reg=/\d/g;
// let reg=/\D/g;
// let res=crowd.match(reg).length;
// console.log(res);

// Username Validator
// 1) If there are numbers, they must be at end
// 2) Letters can be lowercase and uppercase
// 3) At least two characters long

let str = "PawanChavan45";
let checkName = /^[a-zA-Z]{2,}\d*$/; // {2,} at leat two character
let regex = /^[A-Za-z]{2,}\d*$|^[A-Za-z]\d{2,}$/;

// let res=checkName.test(str);
let res = regex.test(str);

console.log(res);
