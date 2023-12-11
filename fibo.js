function fibo(n) {
  let first = 0;
  let second = 1;
  let third;
  const arr = [];
  for(let i = 0;i<n;i++){
    arr.push(first);
    third = first+second;
    first = second;
    second = third;
    third = second;
    
  }
  return arr;
}

function fiboRecursive(n) {
  if(n<=0) return [];
  if (n === 1) return [0]; 
  if (n === 2) return [0, 1];
  const prev = fiboRecursive(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
}

console.log(fibo(8)); 
console.log(fiboRecursive(8));
