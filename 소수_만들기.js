function solution(nums) {
  var answer = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        answer++;
        for (l = 2; l * l <= sum; l++) {
          if (sum % l === 0) {
            answer--;
            break;
          }
        }
      }
    }
  }
  return answer;
}
