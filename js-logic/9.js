function sortaSum(x, y) 
 {
  const plus = x + y; // plus = 50
  if (plus >= 50 && plus <= 80) {// agar 50 50 dan kotta yoki teng bo'lsa va 50 80 dan kichik yoki teng bo'lsa
    return 65;// qaytaradi
  }
  return 80;// tepadagi shartga mos kelmasa
}

console.log(sortaSum(30,20)); // 65 qaytaradi
console.log(sortaSum(90,80)); // 80 qaytaradi