function solution(numbers, target) {
  var answer = 0;

  //DFS 재귀로 풀기

  //graph : 현재위치(0 ~ numbers.length)
  //sum : 합
  function dfs(graph, sum) {
    if (graph === numbers.length) {
      // 탈출조건
      if (sum === target) {
        //합이 target과 같아지면, answer값 1개 증가.
        answer++;
      }
      return;
    }
    dfs(graph + 1, sum + numbers[graph]); //sum에 numbers[graph]값 더하기
    dfs(graph + 1, sum - numbers[graph]); //sum에 numbers[graph]값 빼기
  }

  dfs(0, 0); //graph와 sum을 0부터 시작

  return answer;
}
