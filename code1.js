// Корсак Давтян 274-278

// 1
// function f1(arr, index = 0) {
//   if (index < arr.length) {
//     console.log(arr[index]);
//    f1(arr, index + 1);
//   }
// }
// let arr = [1, 2, 3, 4, 5];
// f1(arr);

// 2
// function f2(arr, index = 0, sum = 0) {
//   if (index < arr.length) {
//     sum += arr[index] * arr[index];
//     return sum(arr, index + 1, sum);
//   } else {
//     return sum;
//   }
// }
// let arr = [1, 2, 3, 4, 5];
// let result = sum(arr);
// console.log(result);

// 3
// function f3(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       f3(obj[key]);
//     } else {
//       console.log(obj[key]);
//     }
//   }
// }
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// f3(obj);

// 4
// function f4(arr) {
//   let flattened = [];
//   function f3(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         f3(arr[i]);
//       } else {
//         flattened.push(arr[i]);
//       }
//     }
//   }
//   flatten(arr);
//   return flattened;
// }
// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let flattenedArr = flattenArray(arr);
// console.log(flattenedArr);

// 5
// function f4(obj) {
//   let sum = 0;
  
//   function f5(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         f5(obj[key]);
//       } else {
//         sum += obj[key];
//       }
//     }
//   }
//   f5(obj);
//   return sum;
// }
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// let totalSum = f4(obj);
// console.log(totalSu);

// 6
// function f8(arr) {
//   let result = '';
//   function f9(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         f9(arr[i]);
//       } else {
//         result += arr[i];
//       }
//     }
//   }
//   flatten(arr);
//   return result;
// }
// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let flattenedString = f8(arr);
// console.log(flattenedString);
