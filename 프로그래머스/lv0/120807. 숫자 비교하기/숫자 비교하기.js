function solution(num1, num2) {
    if(0<=num1<=10000 && 0<=num2<=10000){
        if(num1===num2) {
            return 1;
        } else {
            return -1;
        }
    }
}

solution(2,3);
solution(11,11);
solution(7,99);
    