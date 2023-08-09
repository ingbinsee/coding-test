function solution(num1, num2) {
    if(0 < num1 <= 100 && 0 < num2 <= 100) {
        return parseInt(num1 / num2 * 1000)
    }
}

solution(3,2);
solution(7,3);
solution(1,16);