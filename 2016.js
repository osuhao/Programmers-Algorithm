function solution(a, b) {
  var answer = "";
  var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  var day = new Date(`2016-${a}-${b}`);
  answer = week[day.getDay()];
  return answer;
}
