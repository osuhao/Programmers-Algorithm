function solution(s) {
  var arr = [];
  var answer = -1;

  for (i = 0; i < s.length; i++) {
    arr.push(s[i]);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }

  arr.length === 0 ? (answer = 1) : (answer = 0);

  return answer;
}
