function birxilraqam(x, y, z) {
    if (x == y && y == z) {// agar ushta parametr bir xil bo'lsa 
      return 30;// shuni qaytarsin
    }
    if (x == y || y == z || z == x) {// ikta raqam bir xil bo'lsa 
      return 40;// shuni qaytaradi
    }
    return 20;//shartlarga tog'ri kelmasa shuni qaytarsin
  }
  console.log(birxilraqam(1, 1, 1));// 30 qaytaradi
  console.log(birxilraqam(1, 1, 2));// 40 qaytaradi
  console.log(birxilraqam(1, 2, 3));// 20 qaytaradi