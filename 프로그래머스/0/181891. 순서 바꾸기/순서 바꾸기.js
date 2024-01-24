function solution(num_list, n) {
    const sol = num_list.slice(n);
    return sol.concat(num_list.slice(0, n));
    
}