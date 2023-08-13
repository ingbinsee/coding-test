function solution(numbers) {
   const num = numbers.sort(function(a, b) {
        return a - b;
    });
   const num1 = num[num.length-1];
   const num2 = num[num.length-2];
    
  return num1*num2;
}