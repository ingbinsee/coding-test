function solution(myString) {
   return [...myString].map(list=> list.charCodeAt() < 108 ? 'l' : list).join('')
}

function solution(myString) {
    return [...myString].map(a => a.charCodeAt() < 108 ? 'l' : a).join("")
}