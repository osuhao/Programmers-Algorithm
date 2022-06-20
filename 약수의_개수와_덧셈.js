function solution(left, right) {
  var answer = 0;
  var num = left;
  var cnt = 0;
  while (num <= right) {
    for (i = 1; i <= num; i++) {
      if (num % i === 0) {
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      //짝수면 더하고
      answer += num;
    } else {
      //홀수면 빼기
      answer -= num;
    }
    num++;
    cnt = 0;
  }
  return answer;
}
