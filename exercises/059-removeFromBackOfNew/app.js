function removeFromBackOfNew(arr) {
  // your code here
  let newArr = arr.filter(arr => arr !== arr[arr.length-1]);
  return newArr;
}