function solution(num_list) {
    const list = num_list.sort((a, b)=>{return a-b});
    return list.filter((item, i)=>{
        return i < 5;
    })
}