function solution(n) {
  var answer = 0;
  var arr = String(n).split("");
  arr.sort(function (a, b) {
    return b - a;
  });
  answer = Number(arr.join(""));

  return answer;
}
