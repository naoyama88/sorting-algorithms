function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fillList(itemCount) {
    var anArray = [];
    for (var i = 0; i < itemCount; i++) {
        anArray.push(Math.floor((Math.random() * 10) + 1));
    }
    return anArray;
}

function bubbleSort(theArray) {
    var tmpArray = theArray;
    for (var loopCount = 0; loopCount < tmpArray.length; loopCount++) {
        for (var n = 0; n < tmpArray.length - 1; n++) {
            if (tmpArray[n + 1] < tmpArray[n]) {
                var a = tmpArray[n];
                var b = tmpArray[n + 1];
                tmpArray[n + 1] = a;
                tmpArray[n] = b;
            }
        }
    }
    return tmpArray;
}
