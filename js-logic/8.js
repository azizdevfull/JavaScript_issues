function student(p1)
  {
  if (p1) {
    return p1 >= 90;
  }
 return (p1 >= 89 && p1 <= 100);
 }
 console.log(student("90"));