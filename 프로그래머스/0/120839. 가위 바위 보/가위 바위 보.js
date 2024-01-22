function solution(rsp) {
   return [...rsp].map(list => {
        if(list === '2') {
            return 0;
        } else if(list === '0') {
            return 5;
        } else {
            return 2;
        }
    }).join('')
}