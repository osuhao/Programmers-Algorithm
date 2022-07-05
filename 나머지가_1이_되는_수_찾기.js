function solution(n) {
  var answer = 0;
  for (i = n - 1; i > 1; i--) {
    if (n % i === 1) {
      answer = i;
    }
  }
  return answer;
}
