function hasTargetSum(array, target) {
  console.log(array,target);
  const seenNumbers = {};
  for (let num of array) {
    console.log("num",num,"seenNumbers",seenNumbers);
    const diff = target - num;
    console.log("diff",diff);
		if (diff in seenNumbers) {
			return true;
		}
		seenNumbers[num]=true;
	}
	return false;
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of the function is O(n), where n is the number of elements in the input array. This is because the function iterates through the array once.

*/

/* 
  Add your pseudocode here

  1. Initialize an empty set called seenNumbers.
2. Iterate through each number in the input array.
a. Calculate the difference between the target and the current number.
b. Check if the difference exists in the seenNumbers set.
If it does, return true, indicating that a pair exists.
 If it doesn't, add the current number to the seenNumbers set.
3. If the loop completes without finding a pair, return false.

*/

/*
  Add written explanation of your solution here

  The function utilizes a set to store numbers encountered so far. It iterates through the array, calculating the difference between the target and each element. If the difference exists in the set, it means there exists a pair of numbers that adds up to the target, and the function returns true. If no such pair is found after iterating through the array, the function returns false.
*/

// You can run `node index.js` to view these console logs
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
