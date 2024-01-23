function solution(names) {
    return names.filter((list, i)=>{
        return i % 5 === 0;
    })
}