function kichkina(p1) {
    // p1 = Python
    if (p1.length < 3) { // agar Pythonning uzunligi 3 dan kichik bo'lsa 
      return p1.toUpperCase(); // Pythonni Kotta harfda chiqarib bersin deydi lekin Python 3 ta harfdan uzun shuning uchun bu ishlamaydi
    }
    oldi = (p1.substring(0, 3)).toLowerCase();// Python.substring(0 bu nolinchi indexdan boshlab degani,3 esa 3 ta harf degani yani (Pyt) sozini oladi) toLowerCase kichkina harf qiladi yani oldindagi kotta harfda yozilganini kichkina harfga aylantirad
    orti = p1.substring(3, p1.length);// Python.substring(3-bu yani boshidan uchta harfni olib tashlaydi va Python.length degani 3 ta harf olinganidan keyin qolgan harflari(hon))  
    return oldi + orti; // bu yerda Puthonning boshidagi 3 ta harflarini kichraytirilganini va qolgan harfkarini qoshib chiqaradi
  }
  console.log(kichkina("Python")); // javobi (python)