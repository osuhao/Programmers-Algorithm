function solution(priorities, location) {
  var answer = 0;
  var basket; // 맨 앞 숫자 빼서 넣어둠
  while (true) {
    let max = Math.max(...priorities);
    basket = priorities.shift();
    if (basket === max) {
      //배열에서 제일 큰수랑 같다면
      answer++;
      if (location === 0) {
        return answer;
      }
    } else {
      //다르다면 뺀수를 다시 맨 뒤에 넣어주기
      priorities.push(basket);
    }
    location--; //location 위치도 변경
    if (location < 0) {
      //만약 음수가 된다면 배열의 맨 끝으로 보낸다
      location = priorities.length - 1;
    }
  }
}
