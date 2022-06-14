function solution(w, h) {
  var answer = 1;
  var cancel = 0;

  cancel = w + h - gcd(w, h);
  answer = w * h - cancel;

  return answer;
}

function gcd(w, h) {
  const result = w % h;

  if (result === 0) {
    return h;
  }
  return gcd(h, result);
}
