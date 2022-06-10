// berilgan maks va min son ichidagi sonni chiqarish
function kiruvchi(x, y){	
    // x = 45
    // y = 70
    if( (x >= 40) /*agar 45 40 dan kotta yoki teng bo'sa */ && (x <= 70) /* va 45 70 dan kichik yoki teng bo'lsa */ && (y >= 40 /* va 70 40 dan kotta yoki teng bo'lsa */ && y <= 70 /*va 70 70 dan kotta yoki teng bo'lsa */) ){
    if(x === y){ // === belgisi qattiq tenglik hisoblanadi masalan 1 === 1 bo'lsa true qaytaradi yani boolean ko'rinishda yani 45 === 70
    return "Raqamlar Birxil"; // bizda bu qaytmaydi 45 70 ga teng emas
    }else if (x > y){ // agar boshqa 45 > 70 bo'lsa
    return x; // 45 ni qaytarsin
    }else{ // boshqa
    return y; // 70 ni qaytarsin bizda 70 qaytadi
    }
    }else{
    return "Raqamlarga shartga mos kelmaydi";
    }
    }
    console.log(kiruvchi(40, 40));