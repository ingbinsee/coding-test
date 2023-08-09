function solution(angle) {
    if(0 < angle <= 180) {
        if(0 < angle && angle < 90){
            return 1;
        } else if(angle === 90) {
            return 2;
        } else if(90 < angle && angle < 180) {
            return 3;
        } else {
            return 4;
        }
    }
}

solution(70);
solution(91);
solution(180);