function solution(s) {
  var answer = "";
  var n = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s.slice(n - 1, n + 1);
  } else {
    answer = s[n];
  }
  return answer;
}
