function solution(x) {
  var answer = true;
  var num = String(x);
  var sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  x % sum === 0 ? (answer = true) : (answer = false);
  return answer;
}
