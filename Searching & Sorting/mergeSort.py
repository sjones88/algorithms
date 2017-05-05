import math
def mergeSort(arr):
	if len(arr) == 1:
		return arr

	middle = len(arr)//2
	left = arr[:middle]
	right = arr[middle:]
	leftHalf = mergeSort(left)
	rightHalf = mergeSort(right)
	print(leftHalf, rightHalf)

	def stitch(arr1, arr2):
		results = []
		while len(arr1) > 0 and len(arr2) > 0:
			if arr1[0] <= arr2[0]:
				results.append(arr1.pop(0))
			else:
				results.append(arr2.pop(0))
		results.append(arr1)
		results.append(arr2)
		return results

	return stitch(leftHalf, rightHalf)

a = [33,22,11,1]
print(mergeSort(a))