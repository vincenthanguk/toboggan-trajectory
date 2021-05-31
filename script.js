'use strict';

const mapString =
  '..##.......,#...#...#..,.#....#..#.,..#.#...#.#,.#...##..#.,..#.##.....,.#.#.#....#,.#........#,#.##...#...,#...##....#,.#..#...#.#'.split(
    ','
  );

const mapArr = [];
for (let i = 0; i < mapString.length; i++) {
  mapArr[i] = mapString[i].split('');
}

// const map = [
//   '..##.......'.split(''),
//   '#...#...#..'.split(''),
//   '.#....#..#.'.split(''),
//   '..#.#...#.#'.split(''),
//   '.#...##..#.'.split(''),
//   '..#.##.....'.split(''),
//   '.#.#.#....#'.split(''),
//   '.#........#'.split(''),
//   '#.##...#...'.split(''),
//   '#...##....#'.split(''),
//   '.#..#...#.#'.split(''),
// ];

const countTrees = function (arr, startIndex) {
  let index = startIndex;
  let treeArray = [];

  for (let row = 0; row < arr.length; row++) {
    if (row === 0) row++;
    index = index + 3;
    if (index > 10) index = index - arr[row].length;
    arr[row][index] === '.' ? treeArray.push('O') : treeArray.push('X');
  }
  return treeArray;
};

console.log(countTrees(mapArr, 0));
