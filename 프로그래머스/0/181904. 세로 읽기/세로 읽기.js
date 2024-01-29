function solution(my_string, m, c) {
    return [...my_string].map((list, i) => i % m === c-1 ? list : '').filter(v=>v).join('')
}