let randomNumbers;

function displayNumbers() {
    randomNumbers = generateRandomNumbers(100);
    document.getElementById("randomNumbers").innerHTML = randomNumbers;
}

function generateRandomNumbers(numnum) {
    let randomNumArray = new Array();
    for (let i = 0; i < numnum; i++) {
        let tempNum = Math.floor((Math.random() * 100) + 1);
        randomNumArray.push(tempNum);
    }

    return randomNumArray;
}

function displaySortedNumbers(sortFunction) {
    let randNumArr = [...randomNumbers];
    let sortedArray = sortFunction(randNumArr);
    document.getElementById("boxRight").innerHTML = sortedArray;
}

document.getElementById("generateNumber").addEventListener("click", displayNumbers);
document.getElementById("bubbleSort").addEventListener("click", function() {
    displaySortedNumbers(bubbleSort);
});
document.getElementById("selectionSort").addEventListener("click", function() {
    displaySortedNumbers(selectionSort);
});
