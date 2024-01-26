function solution(intStrs, k, s, l) {
    const sol = intStrs.map(list => list.slice(s, s+l) > k ? Number(list.slice(s, s+l)) : '');
    return sol.filter(v => v)
}