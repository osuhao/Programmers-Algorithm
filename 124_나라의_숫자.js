function solution(n) {
  const number = ["4", "1", "2"];
  let num; //나머지
  const arr = []; //나머지가 들어갈 배열
  var answer = "";

  while (n) {
    num = n % 3;
    arr.push(num);
    n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
  }

  for (i = 0; i < arr.length; i++) {
    answer = number[arr[i]] + answer;
  }
  return answer;
}
