function solution(array, commands) {
  var answer = [];
  for (i = 0; i < commands.length; i++) {
    var newArray = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(newArray[commands[i][2] - 1]);
  }
  return answer;
}
