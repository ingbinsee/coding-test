function solution(array, height) {
    const answer = array.filter((tall)=>{
        return tall > height
    })
    return answer.length;
}