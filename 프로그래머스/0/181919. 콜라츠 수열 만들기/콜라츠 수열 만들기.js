function solution(n) {
    let sol = n;
    let arr = [];
    while(sol !== 1) {
        arr.push(sol);
      if(sol % 2 === 0) {
       sol /= 2;
    } else {
        sol = 3 * sol + 1;
    }  
    }
    arr.push(1);
    return arr;
}