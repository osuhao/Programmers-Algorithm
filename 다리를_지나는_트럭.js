function solution(bridge_length, weight, truck_weights) {
  //다리에 올라갈수잇는 트럭수, 다리가 견딜수잇는 무게, 트럭별 무게
  var answer = 0;
  var bridge = []; //다리올라와있는 트럭들
  var bridge_weight = 0; //현재 다리무게

  for (i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  var now = truck_weights.shift(); //현재 건너고있는 트럭

  bridge.unshift(now);
  bridge.pop();
  bridge_weight += now;
  answer++; // 시간증가

  while (bridge_weight) {
    bridge_weight -= bridge.pop();
    now = truck_weights.shift();

    if (now + bridge_weight <= weight) {
      bridge.unshift(now);
      bridge_weight += now;
    } else {
      bridge.unshift(0);
      truck_weights.unshift(now);
    }
    answer++;
  }

  return answer;
}
