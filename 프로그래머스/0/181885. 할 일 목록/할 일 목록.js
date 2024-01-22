function solution(todo_list, finished) {
    return todo_list.filter((list, i)=>{
        return finished[i] === false; 
    })
}