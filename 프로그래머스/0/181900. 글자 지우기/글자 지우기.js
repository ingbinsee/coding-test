function solution(my_string, indices) {
    return [...my_string].map((list, i)=>indices.includes(i) ? '' : list).filter(a => a).join('')
}