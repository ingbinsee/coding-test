function solution(array) {
    return array.sort((a,b)=>{
       return a - b;
    })[parseInt(array.length/2)]
    
    
}