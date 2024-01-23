function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    num_list.map((list, i)=>{
        (i % 2 === 0) ? even+=list : odd+=list;
    })
    
    return odd > even ? odd : even;
}