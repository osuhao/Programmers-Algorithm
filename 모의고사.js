function solution(answers) {
  var answer = [];

  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let sol1 = answers.filter((a, i) => a === supo1[i % supo1.length]).length;
  let sol2 = answers.filter((a, i) => a === supo2[i % supo2.length]).length;
  let sol3 = answers.filter((a, i) => a === supo3[i % supo3.length]).length;
  let max = Math.max(sol1, sol2, sol3);
  if (sol1 === max) {
    answer.push(1);
  }
  if (sol2 === max) {
    answer.push(2);
  }
  if (sol3 === max) {
    answer.push(3);
  }
  return answer;
}
