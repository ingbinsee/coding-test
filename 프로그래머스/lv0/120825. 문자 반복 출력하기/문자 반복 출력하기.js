function solution(my_string, n) {
    
    let answer = "";
    for(let i=0; i < my_string.length; i++) {
             
        for(let l=1; l <= n; l++) {
            answer+=my_string[i]
        }
    }
    return answer;
}