function solution(arr, n) {
   if(arr.length % 2 !== 0) {
       return arr.map((list, i) => {
          return i % 2 === 0 ? list + n : list;          
       })
   } else {
        return arr.map((list, i) => {
          return i % 2 !== 0 ? list + n : list;          
       })
   }
}