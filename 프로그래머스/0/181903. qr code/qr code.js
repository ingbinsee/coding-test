function solution(q, r, code) {
    return [...code].map((list, i)=> i % q === r && list).filter(v=>v).join('')
}