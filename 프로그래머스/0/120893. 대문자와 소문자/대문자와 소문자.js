function solution(my_string) {
  return [...my_string].map(list => 
        list === list.toUpperCase() ? list.toLowerCase() : list.toUpperCase()
    ).join('')
}