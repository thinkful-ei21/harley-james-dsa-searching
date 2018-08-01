let count = 0;
let data =
    '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
data = data.split(' ');
let sortedData =
    '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
sortedData = sortedData.split(' ').sort((a, b) => a - b);
function indexOf(array, value) {
    //console.log('indexOf reached');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

function binary(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    count++;
    if (item == value) {
        return index;
    } else if (item < value) {
        return binary(array, value, index + 1, end);
    } else if (item > value) {
        return binary(array, value, start, index - 1);
    }
}

export const linearSearch = value => {
    const found = indexOf(data, value);
    if (found === -1) {
        return `The value wasn't in the data, so the search had to check ${
            data.length
        } items.`;
    }
    return `The value is at index ${found}, meaning the search had to check ${found} items`;
};

export const binarySearch = input => {
    count = 0;
    const found = binary(sortedData, input);
    if (found === -1) {
        return `The value wasn't in the data, so the search had to check ${count} times`;
    }
    return `It took ${count} searches to find the ${input}`;
};
