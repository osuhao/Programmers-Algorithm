function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    cnt += s[i] === "(" ? 1 : -1;
    if (cnt < 0) {
      return false;
    }
  }
  return cnt === 0 ? true : false;
}
