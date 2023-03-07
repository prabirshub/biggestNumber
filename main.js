function highestNumber(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}

const scores = [76, 45, 92, 97, 99, 81]

const highestNum = highestNumber(scores)
console.log(highestNum)
