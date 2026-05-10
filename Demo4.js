/*
There are 5 type of conditional loops 
1) for loop
2) while loop
3) do while loop
4) for of loop
5) for in loop         */

// ******************************** for loop *****************************************
/*
for (var i = 0; i < 10; i++) {
  console.log('Hello for the ' + i + 'th time');
}
//print 1 to 5 value
console.log('-------------------------------------------------------------');
for (let i = 1; i <= 5; i++) {
  console.log(i); //1   2   3   4   5
}

//e.g. print 10 to 20;
console.log('-------------------------------------------------------------');
for (let i = 10; i <= 20; i++) {
  console.log(i); //10   11 12  13 .....
}

//e.g.
//print 10 to 5 values
console.log('-------------------------------------------------------------');
for (let i = 10; i >= 5; i--) {
  console.log(i); //10  9   8  7   6   5
}
console.log('-------------------------------------------------------------');

//Print 20 to 50 values
// for(let i=20; i <=50; i++)
// {
//     console.log(i);
// }

//print 15 to 10 values
var sum = 0;
for (let i = 100; i >= 0; i -= 2) {
  sum = sum + i;
}
console.log('\nSum is :' + sum + '\n');   */

// ******************************** while loop *****************************************
console.log('-------------------------------------------------------------');

/*
var i = 0;
while (i <= 12) {
  if (i % 2 == 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

//print 1 to 5 value using while loop
console.log('-------------------------------------------------------------');
var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//print 20 to 10 values using for loop
console.log('-------------------------------------------------------------');
let p = 20;

while (p >= 10) {
  console.log(p);

  p--;
}
console.log('-------------------------------------------------------------');
var u = -5;
while (u <= 5) {
 
  if (u == 0) {
    break;
  }
 console.log(u);
  u++;
}
*/
// ******************************** do while loop *****************************************
console.log('-------------------------------------------------------------');

// let a = 12;
// do {
//   console.log(a);
//   a++;
// } while (a < 20);

// ******************************** for of loop *****************************************
console.log('-------------------------------------------------------------');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of arr) {
  console.log(i);
}
console.log('-------------------------------------------------------------');
const xyz = ['Selenium', 'Playwright', 'HTML', 'CSS', 'Javascript'];

for (let value of xyz) {
  console.log(value);
}
console.log('-------------------------------------------------------------');
const intArr = [200, 300, 400, 500, 600, 700];

for (let arrValue of intArr) {
  console.log(arrValue);
}
console.log('-------------------------------------------------------------');
var stringArr = [
  'Playwright',
  'Worker',
  'StorageState',
  'Hooks',
  'retries',
  'videos',
];

for (let arrValue of stringArr) {
  console.log(arrValue);
}
console.log('-------------------------------------------------------------');
