function convert(num) { 
  // if(num < 1){ return "";}
  // if(num >= 1000){ return "M" +convert(num - 1000);}
  // if(num >= 900){ return "CM" +convert(num - 900);}
  // if(num >= 500){ return "D" +convert(num - 500);}
  // if(num >= 400){ return "CD" +convert(num - 400);}
  // if(num >= 100){ return "C" +convert(num - 100);}
  // if(num >= 90){ return "XC" + convert(num - 90);}
  // if(num >= 50){ return "L" + convert(num - 50);}
  // if(num >= 40){ return "XL" + convert(num - 40);}
  // if(num >= 10){ return "X" + convert(num - 10);}
  // if(num >= 9){ return "IX" + convert(num - 9);}
  // if(num >= 5){ return "V" + convert(num - 5);}
  // if(num >= 4){ return "IV" + convert(num - 4);}
  // if(num >= 1){ return "I" + convert(num - 1);}  


  let romArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  for ( let i = 0; i < romArr.length; i++ ) {
    while ( num >= numArr[i]) {
      result+=romArr[i];
      num-=numArr[i];
    }
  }
  return result;
}
console.log(convert(568)); 



