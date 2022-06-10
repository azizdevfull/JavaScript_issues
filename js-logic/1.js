function kotta_son(x, y, z) 
// x = 500 
// y = 50 
// z = 1000
 {
  aziz = 0;
  if (x > y){ // yani 500 dan 50 kichik bo'lsa //
    aziz = x; // o'zgaruvchi 500 ga teng
  } else //aksi bo'lsa 
  {
    aziz = y; // o'zgaruvchi 50 ga teng
  }
  if (z > aziz) // agar 1000 50 dan kotta bo'lsa 
  {
    aziz = z; // o'zgaruvchi teng 1000 ga
  }
  return aziz; // aziz = 1000
}
console.log(kotta_son(500,50,1000))