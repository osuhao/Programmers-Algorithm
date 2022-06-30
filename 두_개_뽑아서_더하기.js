function solution(numbers) {
  var answer = [];
  numbers = numbers.sort();
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)];
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
