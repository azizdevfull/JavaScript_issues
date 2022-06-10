function raqamX(x, y, z ) {
  // x = 10
  // y = 15
  // z = 31
    if ( y > x && z > y) // 15 > 10 va 31 > 15 bo'lsa qattiq rejim bo'lsin
    {
      return "Qattiq rejim";    
    }
    // x = 24
    // y = 22
    // z = 31
    else if(z > y) // 31 > 22 bo'lsa Yumshoq rejim bo'lsin
     return "Yumshoq rejim";
    else
      return "Nomalum";
  }
  
  console.log(raqamX(10,15,31));// Qattiq rejim
  console.log(raqamX(24,22,31));// Yumshoq rejim
  console.log(raqamX(50,21,15));// Nomalum