import math
def stitch(arr1, arr2):
	results = []

	while len(arr1) != 0 and len(arr2) != 0:
		if arr1[0] <= arr2[0]:
			results.append(arr1.pop(0))
		else:
			results.append(arr2.pop(0))

	results += arr1
	results += arr2
	return results

def mergeSort(arr):
	if len(arr) <= 1:
		return arr

	middle = len(arr)//2
	left = arr[:middle]
	right = arr[middle:]
	leftHalf = mergeSort(left)
	rightHalf = mergeSort(right)

	return stitch(leftHalf, rightHalf)