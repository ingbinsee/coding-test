function solution(num_str) {
    let answer=0;
    [...num_str].forEach((item)=>{
        answer+=Number(item);
    })
    return answer;
}