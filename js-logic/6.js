function last_son(a, b, c){
    // a = 21
    // b = 11
    // c = 41
    if( a >0 && b > 0 && c>0 ){ // 21 > 0 va 11 > 0 va 41 > 0 bu parametrdagi kelayotgan sonning pilus yoki minus ekanligini aniqlaydi minus bo'lsa false beradi
        let last_int1 = a.toString().slice(-1); //toString 21 ni string ichiga tiqib oladi va slice(-1) esa 21 ning 1 raqamini kesib oladi orqa tomondan (-1) bo'lgani uchun
        let last_int2 = b.toString().slice(-1); //toString 11 ni string ichiga tiqib oladi va slice(-1) esa 11 ning 1 raqamini kesib oladi orqa tomondan (-1) bo'lgani uchun
        let last_int3 = c.toString().slice(-1); //toString 41 ni string ichiga tiqib oladi va slice(-1) esa 41 ning 1 raqamini kesib oladi orqa tomondan (-1) bo'lgani uchun
        // last_int1 = 1
        // last_int2 = 1
        // last_int3 = 1
        if( (last_int1 === last_int2) && (last_int1 === last_int3) ){ // oxirgi son birxilligini aniqlaydi agar birxil bo'lsa 
            return true; // true chiqazadi
        } else{
            return false; // aksi bo'lsa false chiqazadi
        }
    }else{
        return false; // minus son bo'lsa false chiqazadi
    }
}
console.log(last_son(21,11,-41));