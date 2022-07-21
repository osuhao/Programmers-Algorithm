function solution(n, m) {
  var answer = [];
  var gcd = 1,
    lcd = Math.max(n, m);

  //최대공약수
  for (i = 0; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  answer.push(gcd);

  //최소공배수
  while (true) {
    if (lcd % n === 0 && lcd % m === 0) {
      break;
    } else {
      lcd++;
    }
  }
  answer.push(lcd);

  return answer;
}
