function indexOf(array, value) {
    console.log('indexOf reached');
    for (let i=0; i<array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

export const linearSearch = (input, value)=> {
    const data = input.split(' ');
    console.log(indexOf(data, value));
};

export const binarySearch = input => {
    
};
