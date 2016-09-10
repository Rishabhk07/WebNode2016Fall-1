/**
 * Created by championswimmer on 10/09/16.
 */

str = "asdasdasdasdasddas";
console.log(str.length);

console.log(str.indexOf("asd"));
console.log(str.search("s.*d"));

console.log(str.lastIndexOf("asd"));
console.log(str.includes("asd"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.substr(/*start*/2,/*length*/4));
console.log(str.slice(4,6));
console.log(str.substring(4,6));
console.log(str.split('s'));
console.log(str.split());
console.log(str.split(''));


console.log(str.split('s').join('s'));

str2 = str.replace('asd', 'ffggh');
console.log(str2);

