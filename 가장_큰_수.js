function solution(numbers) {
  var answer = "";

  answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  if (Number(answer) === 0) {
    answer = "0";
  }
  return answer;
}
