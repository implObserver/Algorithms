export const mergeSort = (array, reverse = false) => {
    if (array.length <= 1) {
        return array;
    }

    const left = mergeSort(array.slice(0, array.length / 2), reverse);
    const right = mergeSort(array.slice(array.length / 2, array.length), reverse);

    const sorted = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] === right[0]) {
            sorted.push(left.shift(), right.shift());
        } else if (!reverse ? left[0] < right[0] : left[0] > right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    if (left.length > 0) {
        return sorted.concat(left);
    }

    if (right.length > 0) {
        return sorted.concat(right);
    }

    return sorted;
}