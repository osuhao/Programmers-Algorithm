function solution(price, money, count) {
  var answer = 0;
  for (i = 1; i <= count; i++) {
    answer += price * i;
  }
  answer = answer - money;
  return answer < 0 ? 0 : answer;
}
