// For loop

console.log('for loop..................');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('for while..................');
//while loop
var i = 11;
while (i < 21) {
  console.log(i);
  i++;
}

console.log('Reverse Order');
let p = 50;
while (p >= 20) {
  console.log(p);
  p--;
}

console.log('______________');
var i = -3;

while (true) {
  if (i == 7) {
    console.log('Element found : ' + i);
    break;
  }
  i++;
}

console.log('do while loop..................');

var i = 100;

do {
  console.log(i);
  i++;
} while (i <= 20);

console.log('for of loop..................');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of arr) {
  console.log(i);
}
