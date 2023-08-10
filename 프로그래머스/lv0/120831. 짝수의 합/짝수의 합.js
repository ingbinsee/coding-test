function solution(n) {
    let answer = 0;
    if(0 < n <= 1000){       
        for(let i = 0; i <= n; i++){
            if(i%2===0){
                answer += i;
            }
        }
    }
    return answer;
}

solution(10);
solution(4);