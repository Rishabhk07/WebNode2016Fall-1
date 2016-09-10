/**
 * Created by championswimmer on 10/09/16.
 */

a = [1,2,3,4,5];

console.log(a.slice(2,3)); //3

b = [1,2,3,4];
console.log(b.splice(1,2)); //2,3
console.log(b); // 1,4

console.log(a.toString());// "1,2,3,4,5"
console.log(a.join('-'));
console.log(a.pop()); // 5
console.log(a) // [1,2,3,4]
console.log(a.push(10)); //5
console.log(a) //[1,2,3,4,10]

a[2] = 66;
console.log(a);

delete a[3];
console.log(a);

c = [11,10,1,4,5];
console.log(c.sort());
/*
 a, aa, aaa, aab, ab,  b, c
 */
sortedc = c.sort((a,b) => (a>b));
console.log(sortedc);


e = [1,4,9,25,36];

e.forEach(function(num, i) {
    console.log(this + " " + i + " " + Math.sqrt(num))
}, document);

f = e.map((num) => Math.sqrt(num));
console.log(f);

