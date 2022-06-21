function solution(n) {
  var answer = 0;
  var num = n.toString(3).split("").reverse().join("");
  answer = parseInt(num, 3);
  return answer;
}
