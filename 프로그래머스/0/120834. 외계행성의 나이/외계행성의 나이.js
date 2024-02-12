function solution(age) {
    const str = 'abcdefghij';
    const ageStr = String(age)
    return [...ageStr].map((list)=>str.split('')[list]).join('')
}