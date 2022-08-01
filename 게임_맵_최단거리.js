function solution(maps) {
  var answer = -1;
  var n = maps.length;
  var m = maps[0].length;

  //n*m 배열 0으로 초기화
  let visited = Array.from(Array(n), () => Array(m).fill(false));

  //bfs를 위한 큐 초기화
  let queue = [[0, 0, 1]]; // 위치 (0,0), answer=1
  let queueIndex = 0; //큐의 현재위치

  //n,m이 움직일 배열 (하, 우, 상, 좌)
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, 1, 0, -1];

  while (queue.length > queueIndex) {
    //queue의 값을 now로 빼옴
    const now = queue[queueIndex];

    //값을 꺼냈으니 다음 값으로 옮겨줌
    queueIndex += 1;

    //만약 꺼낸값이 도착지라면
    if (now[0] === n - 1 && now[1] == m - 1) {
      answer = now[2];
      break;
    }

    //만약 꺼낸 값이 도착지가 아니라면
    if (!visited[now[0]][now[1]]) {
      visit(now[0], now[1], now[2]);
    }
  }
  //방문위치와 이동거리(sum)을 받음
  function visit(x, y, sum) {
    visited[x][y] = true;

    //현재 위치에서 상하좌우로 이동하는 반복문
    for (let i = 0; i < moveX.length; i++) {
      const movedX = x + moveX[i];
      const movedY = y + moveY[i];

      if (
        movedX >= 0 &&
        movedX < n &&
        movedY >= 0 &&
        movedY < m &&
        !visited[movedX][movedY] &&
        maps[movedX][movedY] === 1
      ) {
        queue.push([x + moveX[i], y + moveY[i], sum + 1]);
      }
    }
  }
  return answer;
}
