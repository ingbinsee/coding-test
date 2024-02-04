function solution(cipher, code) {
    return [...cipher].map((list, i)=>
        (i+1) % code === 0 ? list : ''
    ).filter(v=>v).join('')
}