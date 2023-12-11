function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case for recursion

  const midIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex);

  // recursively sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  // add any remaining elements
  console.log({left,right})
  //the following below operations are similar to 
  // while(leftIndex<left.length)result.push(left[leftIndex++])
  // as the spread operator gets all the elements and we slice it from the left/right index
  result.push(...left.slice(leftIndex));
  result.push(...right.slice(rightIndex));

  return result;
}

const arr = [5, 4, 3, 2, 1];
const sortedArr = mergeSort(arr);

console.log(sortedArr); // Output: [1, 2, 3, 4, 5]

