function solution(n) {
    let str = (n + '').split('')
    let answer = 0;
    str.forEach((num) => {
        answer += Number(num);
    })
    return answer;
}