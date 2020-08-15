function insertionSort(array) {
	let len = array.length;
	for(let i = 1; i < len; i++) {
		let key = array[i];
		let j = i - 1;
		while(j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = key;
	}
	return array;
}

let array = [20, 45, 93, 67, 10, 97, 52, 88, 33, 92];
let sortedArray = insertionSort(array);
console.log(sortedArray);	