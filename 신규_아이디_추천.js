function solution(new_id) {
  var answer = "";
  answer = new_id
    .toLowerCase() // 1단계
    .replace(/[^\w-_.]/g, "") // 2단계
    .replace(/\.{2,}/g, ".") // 3단계
    .replace(/^\.|\.$/g, "") // 4단계
    .replace(/^$/, "a") // 5단계
    .slice(0, 15)
    .replace(/^\.|\.$/g, ""); //6단계
  while (answer.length <= 2) {
    //7단계
    answer = answer.concat(answer[answer.length - 1]);
  }
  return answer;
}
