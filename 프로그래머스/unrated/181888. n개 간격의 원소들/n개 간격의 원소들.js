function solution(num_list, n) {
    
    return num_list.filter((num, index) => {
        return (index % n === 0)
    })    
}