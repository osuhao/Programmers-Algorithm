function solution(n) {
  const number = String(n).split("");
  var answer = number.reduce((x, y) => Number(x) + Number(y), 0);
  return answer;
}
