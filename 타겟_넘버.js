function solution(numbers, target) {
  var answer = 0;

  //왼쪽 -1  오른쪽 +1
  //gragh:깊이 sum:합
  function dfs(graph, sum) {
    if (graph === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(graph + 1, sum - numbers[graph]);
    dfs(graph + 1, sum + numbers[graph]);
  }
  dfs(0, 0);
  return answer;
}
