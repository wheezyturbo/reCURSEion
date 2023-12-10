function fibo(n){
  let first = 0;
  let second = 1;
  const arr  = [];
  for(let i = 0;i<n;i++){
    arr.push(first);
    first = second;
    second = second+first;
  }
  return arr;
}

console.log(fibo(3))
