const arr = [1, 2, 3];

let example = arr.map(function (el) {
  return el * el;
});
console.log(example);

let arrowExample = arr.map((el) => el * el);
console.log(arrowExample);
