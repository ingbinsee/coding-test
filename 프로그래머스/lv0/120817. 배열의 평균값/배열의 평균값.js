const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = [89,90,91,92,93,94,95,96,97,98,99];

function solution(numbers) {
    let num = 0;
    numbers.forEach((item)=>{
        num+=item;
    })
    return num/numbers.length
}

solution(numbers1)
solution(numbers2)