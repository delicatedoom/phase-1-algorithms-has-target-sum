function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let first = 0; first < array.length; first++) {
    for (let second = first+1; second < array.length; second++) {
      if(array[first]+array[second] == target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  For (first) O(n)
    For (second) O(n)
      O(1)
  O(1)
  Result O(n2) bc we have 2 nested fors
*/

/* 
  iterate array stating with the first element
    iterate array starting with the element after the first one selected before
      check if the sum of both is equal to the target
        return true if statement is true
  
  Return false if the if statement was never true
*/

/*
  To find a pair that is equal to the target, we must verified one by one the sum of each number. if we find a valid sum we return true if not we return false.
*/
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;