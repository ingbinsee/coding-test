function solution(num_list) {
    if(num_list[num_list.length-1]>num_list[num_list.length-2]) {
       return [...num_list, num_list[num_list.length-1]-num_list[num_list.length-2]]
    } else {
       return [...num_list, num_list[num_list.length-1]*2]
    }
}