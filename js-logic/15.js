function tesnum(x, y) {
  return x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;
}
console.log(tesnum(15, 9));
console.log(tesnum(25, 15));
console.log(tesnum(7, 8));
console.log(tesnum(25, 10));
console.log(tesnum(5, 9));
console.log(tesnum(7, 9));
console.log(tesnum(9, 25));
