const arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}

for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]());
}

// 클로저는 스코프체인
