const arr = new Array(5).fill(3);

arr.forEach((v, i, array) => {
  console.log(v); 
  console.log(i);
  console.log(array);
});
