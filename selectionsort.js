function selectionSort(array) {
    console.log("asdf");
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }

        if (array[i] > array[minIndex]) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
            console.log(array[i]);
        } else {
            console.log("skip");
        }
    }
    return array;
}
