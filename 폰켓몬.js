function solution(nums) {
  var answer = 0;

  var newNums = [...new Set(nums)];
  newNums.length > nums.length / 2
    ? (answer = nums.length / 2)
    : (answer = newNums.length);
  return answer;
}
