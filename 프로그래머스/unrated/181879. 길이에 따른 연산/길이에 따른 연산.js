function solution(num_list) {
    let answer=1;
    if(num_list.length>=11) {
        num_list.forEach(item => answer+=item)
        return answer-1
    } else {
        num_list.forEach(item => answer*=item)
        return answer;
    }                      
     return answer;
}