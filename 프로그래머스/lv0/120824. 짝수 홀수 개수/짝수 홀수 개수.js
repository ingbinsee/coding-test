function solution(num_list) {
    const evenLength = num_list.filter((num)=>{
        return num%2===0
    }).length
    return [evenLength, num_list.length-evenLength]
}