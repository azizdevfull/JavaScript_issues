// 2 ta parametrdagi xarflar bir biriga mos tushsa true yoq bolsa false chiqaradigan dastur
function check_char(a, b)
// a = JavaScript
// b = a
 {
  az = 0; // birinchi o'zgaruvchini 0 ga tenglab olamiz
  for (let i = 0; i < a.length /*JavaScript ning uzunligi aylanib chiqadi yani xarbir xarfni oqib otadi */ ; i++)
  {
    if (a.charAt(i) == b) {// agar JavaScript so'zidagi harf a ga teng bo'lsa   // charAt aslida parametrning uzilgan joyida bosh harfini oladi yani a.charAt(a) = J agar a.charAt(1) qilsak JavaScript so'zidan ikkinchi indexni oladi yani (a) harfini
      az++; //az++ yani bittaga oshadi 
    }
  }
  return (az >= 2 && az <= 4); // 0 dan 2 kichkina bo'lsa yoki teng bo'lsa va 0 <= 4 chiqazadi yani eng kami 2 harf bir hil bo'lsa va eng ko'pi 4 ta bir hil harf bo'lsa true chiqaradi
}
console.log(check_char("JavaScript", "a")); // true chiqadi chunki JavaScript so'zida 2 ta (a) harfi bor
console.log(check_char("Aziza", "a")); // false chiqadi chunki Aziza so'zida bitta kichkina (a) harfi bor