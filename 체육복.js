function solution(n, lost, reserve) {
  var answer = 0;
  var uniform = [];

  for (i = 0; i < n; i++) {
    uniform[i] = 1;
  }
  for (i = 0; i < lost.length; i++) {
    //유니폼 없는 학생
    uniform[lost[i] - 1] = 0;
  }
  for (i = 0; i < reserve.length; i++) {
    //유니폼 여분이 있는 학생
    uniform[reserve[i] - 1]++;
  }
  for (i = 0; i < n; i++) {
    //유니폼 빌려줄수있는지 여부
    if (uniform[i - 1] === 2 && uniform[i] === 0) {
      uniform[i] = 1;
      uniform[i - 1] = 1;
    }
    if (uniform[i + 1] === 2 && uniform[i] === 0) {
      uniform[i] = 1;
      uniform[i + 1] = 1;
    }
  }
  //수업을 들을 수 있는 학생 수
  for (i = 0; i < n; i++) {
    if (uniform[i] >= 1) {
      answer++;
    }
  }
  return answer;
}
