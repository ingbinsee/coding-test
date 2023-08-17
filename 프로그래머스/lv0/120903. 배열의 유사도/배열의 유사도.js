function solution(s1, s2) {
    return s1.filter((num)=>{
        return s2.includes(num)
    }).length
}