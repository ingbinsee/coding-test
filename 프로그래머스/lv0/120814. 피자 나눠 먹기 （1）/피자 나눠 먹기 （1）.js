function solution(n) {
    let pizza=0;
    if(1<=n && n <=100) {
       pizza = Math.ceil(n/7);             
    }
    return pizza;
}