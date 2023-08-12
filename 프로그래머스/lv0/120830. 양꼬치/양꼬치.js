function solution(n, k) {
    let total;
    let minus = parseInt(n/10)
        if(n>=10){
            total = 12000*n+2000*(k - minus)
        } else {
            total = 12000*n+2000*k
        }
    return total;
}

solution(10, 3);
solution(64, 6);