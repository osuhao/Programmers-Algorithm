function solution(sizes) {
  var answer = 0;
  var wMax = 0;
  var hMax = 0;
  const reSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));
  for (i = 0; i < sizes.length; i++) {
    if (wMax < reSizes[i][0]) {
      wMax = reSizes[i][0];
    }
    if (hMax < reSizes[i][1]) {
      hMax = reSizes[i][1];
    }
  }
  answer = wMax * hMax;
  return answer;
}
