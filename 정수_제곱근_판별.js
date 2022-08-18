function solution(n) {
  var answer = 0;
  var sqrt = Math.sqrt(n);

  if (sqrt % 1 !== 0) {
    //제곱근이 아닐경우
    answer = -1;
  } else {
    //제곱근일경우
    answer = Math.pow(sqrt + 1, 2);
  }
  return answer;
}
