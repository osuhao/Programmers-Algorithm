function solution(lottos, win_nums) {
  //lottos : 구매한 로또 번호를 담은 배열
  //win_num : 당첨번호 배열
  //당첨 가능한 최고 순위, 최저 순위 배열에 담아서 리턴
  var answer = [];

  let same = lottos.filter((el) => win_nums.includes(el)).length;
  let zero = lottos.filter((el) => 0 === el).length;

  same + zero === 0 ? answer.push(6) : answer.push(7 - (same + zero));
  same === 0 ? answer.push(6) : answer.push(7 - same);

  return answer;
}
