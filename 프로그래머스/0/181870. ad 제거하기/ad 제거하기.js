function solution(strArr) {
    return strArr.filter((list)=>
        !(list.includes('ad'))
    )
}