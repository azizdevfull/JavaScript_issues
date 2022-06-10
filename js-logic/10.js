function sonlar(p1,p2) {
    //p1 = 10
    //p2 = 10
    if (p1 == p2) {// agar 10 == 10 
        return 3 * (p1+p2)// qaytar 3 *(10+10)=60
    }else{
        return(p1+p2)//10+10 bolishi kerak lekin bu ishlamaydi chunki ikta bir xil son
    }
    
}
console.log(sonlar(10,10))//60
console.log(sonlar(11,12))//23