function solution(d, budget) {
  var answer = 0;
  var sum = 0;
  d.sort((a, b) => a - b);
  for (i = 0; i < d.length; i++) {
    answer++;
    sum += d[i];
    if (sum > budget) {
      answer--;
    }
  }
  return answer;
}
