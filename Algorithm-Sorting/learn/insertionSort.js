function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j -1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

module.exports = insertionSort;
