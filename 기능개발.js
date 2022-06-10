function solution(progresses, speeds) {
  var answer = [];
  var pro = 0; //현재 작업의 진도
  var day = 1; //걸린 날
  var cnt = 0; //배포되는 작업 갯수

  while (progresses[0]) {
    //현재 작업진도 =  작업진도+(스피드*날짜)
    pro = progresses[0] + speeds[0] * day;

    if (pro >= 100) {
      //작업이 완료됐을때
      progresses.shift();
      speeds.shift();
      cnt++;
    } else {
      //작업이 완료되지 않았을때
      if (cnt > 0) {
        answer.push(cnt);
      }
      day++;
      cnt = 0;
    }
  }
  answer.push(cnt);

  return answer;
}
