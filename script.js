'use strict';
import { largeMap } from './data.js';

// 1) create nested array out of map string

const mapString =
  '..##.......,#...#...#..,.#....#..#.,..#.#...#.#,.#...##..#.,..#.##.....,.#.#.#....#,.#........#,#.##...#...,#...##....#,.#..#...#.#'.split(
    ','
  );

const mapArr = [];
for (let i = 0; i < mapString.length; i++) {
  mapArr[i] = mapString[i].split('');
}

// 2) function for traversing the map with slope right 3, down 1. function takes the nested map array and starting index

const countTrees = function (arr, startIndex) {
  // modulo 11 for index>11
  //   0, 1, 2, ..., 10, 0, 1, 2,...

  let index = startIndex % arr[0].length;
  let trees = 0;

  for (let row = 0; row < arr.length; row++) {
    //   only add 1 in first map[0] to skip row [0]
    if (row === 0) row++;
    // increment index by 3
    index = index + 3;
    if (index >= arr[row].length) index = index - arr[row].length;
    // push 'O' for '.', 'X' for '#'
    if (arr[row][index] === '#') trees++;
  }
  return trees;
};

console.log('--- number of trees for small map with step size 3, 1 ---');
console.log(countTrees(mapArr, 0));
// 3) returns ["O", "X", "O", "X", "X", "O", "X", "X", "X", "X"] -> 7
// console.log(countTrees(mapArr, 11)); // -> returns same as above thanks to modulo

// 4) Solution works for large map as well
const largeMapArr = largeMap.slice(1).split(',');
for (let i = 0; i < mapString.length; i++) {
  mapArr[i] = mapString[i].split('');
}

console.log('--- number of trees for large map with step size 3, 1 ---');
console.log(countTrees(largeMapArr, 0)); // -> 272

// ----------------------- PART TWO ------------------------

// improved function with adjustable step size
const countTreesAdjustable = function (arr, startIndex, right, down) {
  let index = startIndex % arr[0].length;
  let trees = 0;

  for (let row = 0; row < arr.length; row = row + down) {
    //   skip first row
    if (row === 0) row = row + down;
    // increment index by 'right'
    index = index + right;
    // console.log(row, index);
    if (index >= arr[row].length) index = index - arr[row].length;
    // push 'O' for '.', 'X' for '#'
    if (arr[row][index] === '#') trees++;
  }
  return trees;
};

// console.log(countTreesAdjustable(largeMapArr, 0, 3, 1)); // -> 272

console.log('--- different step sizes for small map ---');
console.log(countTreesAdjustable(mapArr, 0, 1, 1)); // -> 2
console.log(countTreesAdjustable(mapArr, 0, 3, 1)); // -> 7
console.log(countTreesAdjustable(mapArr, 0, 5, 1)); // -> 3
console.log(countTreesAdjustable(mapArr, 0, 7, 1)); // -> 4
console.log(countTreesAdjustable(mapArr, 0, 1, 2)); // -> 2

console.log('--- different step sizes for large map ---');
console.log(countTreesAdjustable(largeMapArr, 0, 1, 1)); // -> 85
console.log(countTreesAdjustable(largeMapArr, 0, 3, 1)); // -> 272
console.log(countTreesAdjustable(largeMapArr, 0, 5, 1)); // -> 66
console.log(countTreesAdjustable(largeMapArr, 0, 7, 1)); // -> 73
console.log(countTreesAdjustable(largeMapArr, 0, 1, 2)); // -> 35

console.log('--- SOLUTION ---');
console.log(85 * 272 * 66 * 73 * 35); // -> 3898725600
