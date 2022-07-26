function solution(s) {
  var answer;
  if (s.length === 4 || s.length === 6) {
    if (s == parseInt(s)) {
      answer = true;
    } else {
      answer = false;
    }
  } else {
    answer = false;
  }
  return answer;
}
