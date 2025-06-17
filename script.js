const divide = (arr, n) => {
  n = Number(n); // Convert n from prompt (string) to number
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  }

  // Push the last chunk if not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

// Example usage
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
