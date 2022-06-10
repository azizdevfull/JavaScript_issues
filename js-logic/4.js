// ikta min va max sonlarning ichida kiruvchi 2 parametr sonlarning kottasini chiqaradigan dastur
function max_min(x, y){	
    // x = 45
    // y = 44
    if( (x >= 40 /* agar 40 dan 45 kotta yoki teng bo'lsa */) && (x <= 60/* agar 60 dan 45 kotta yoki teng bo'lsa */) && (y >= 40/* agar 40 dan 44 kotta yoki teng bo'lsa */ && y <= 60/* agar 60 dan 44 kotta yoki teng bo'lsa */) ){
    if(x === y){ // === belgisi qattiq tenglik hisoblanadi masalan 1 === 1 bo'lsa true qaytaradi yani boolean ko'rinishda yani 45 === 44
    return "Raqamlar Birxil"; // bizda bu qaytmaydi 45 44 ga teng emas
    }else if (x > y){ // agar boshqa 45 > 44 bo'sa
    return x; // 45 ni qaytarsin
    }else{ // boshqa
    return y; // 44 ni qaytarsin
    }
    }else{
    return "berilgan max va min sonlarga tog'ri kelaydi"; // kiritilgan parametr max va min sonlardan kotta yoki kichik bo'lsa
    }
    }
    console.log(max_min(45, 44)); // 45 chiqadi chunki 60 va 40 ning ichidagi parametrlarning qiymati 44 va 45 bo'lgach kottasi yani 45 ni chiqaradi