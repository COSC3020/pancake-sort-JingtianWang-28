function flip(array, n) {
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [array[i], array[n - i - 1]] = [array[n - i - 1], array[i]];
    }
    return array;
}

function pancakeSort(array) {
    for (let size = array.length; size > 1; size--) {
        let maxIdx = 0;
        for (let i = 1; i < size; i++) {
            if (array[i] > array[maxIdx]) {
                maxIdx = i;
            }
        }
        
        if (maxIdx !== size - 1) {
            if (maxIdx > 0) {
                flip(array, maxIdx + 1);
            }
            flip(array, size);
        }
    }
    return array;
}
