// x va y ning qaysi biri yuzga yaqin bo'lsa shuni chiqaradigan dastur
function yuz(x, y) {
    // x = 90
    // y = 85
    if (x != y) // agar 90 85 ga teng bo'lmasa
    {
    x1 = Math.abs(x - 100);// x1 teng 90 - 100 = -10
    y1 = Math.abs(y - 100);// y1 teng 85 - 100 = -15
    if (x1 < y1) // agar -10 dan -15 kotta bo'lsa
    {
      return x; // 90 ni chiqarib bersin
    }
    if (y1 < x1) // agar -15 dan -10 kotta bo'lsa 
    {
      return y; // 85 ni qaytarsin
    }
    }
    else 
      return x || y; // x va y bir xil son bo'lip qolsa x-ni yoki y-ni chiqarib bersin
  }
  console.log(yuz(90, 85)); // 90 chiqadi