'use strict';

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

  let index = startIndex % 11;
  let treeArray = [];

  for (let row = 0; row < arr.length; row++) {
    //   only add 1 in first map[0]
    if (row === 0) row++;
    // increment index by 3
    index = index + 3;
    if (index > 10) index = index - arr[row].length;
    // push 'O' for '.', 'X' for '#'
    arr[row][index] === '.' ? treeArray.push('O') : treeArray.push('X');
  }
  return treeArray;
};
console.log(countTrees(mapArr, 0));
// 3) returns ["O", "X", "O", "X", "X", "O", "X", "X", "X", "X"]
console.log(countTrees(mapArr, 11)); // returns same as above
