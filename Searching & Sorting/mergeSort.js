const mergeSort = (arr) => {
	// base case: an array of length one is already 'sorted'
	if (arr.length === 1) {
		return arr;
	}

	// if the array has more than one element, we break it in half and recurse
	let middle = Math.ceil(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);
	let sortedLeft = mergeSort(left);
	let sortedRight = mergeSort(right);

	// once the array is broken down into 'sorted' bits, stitch the bits together
	return merge(sortedLeft, sortedRight);

	// we need a function to do the stitching on the way back up the recursive tree
	function merge (arr1, arr2) {
		let results = [];

		// while there's anything left in both arrays, compare the first el of each array
		while (arr1.length > 0 && arr2.length > 0) {
			if (arr1[0] <= arr2[0]) {
				results.push(arr1.shift());
			} else {
				results.push(arr2.shift());
			}
		}

		// a slightly fancy way of saying 'concatenate whatever is left in arr1 and arr2'
		return [].concat(results, arr1, arr2);
	}
}

// a test
let i = 0;
do {
	let arr = [];
	for (let n = 0; n < 100; n++) {
		arr.push(Math.random() * 10);
	}
	let control = arr.slice().sort((a,b) => { return a - b; });
	let test = mergeSort(arr);
	let result = true;
	for (var m = 0; m < control.length; m++) {
		if (control[m] != test[m]) {
			result = false;
		}
	}
	console.log(result);
	i++;
} while (i < 10)

// todo: a discussion of space and time complexity
