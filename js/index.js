let randomNumbers;

function displayNumbers(num) {
    randomNumbers = generateRandomNumbers(num);
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

document.getElementById("generateNumber").addEventListener("click", () => {displayNumbers(100)});
document.getElementById("bubbleSort").addEventListener("click", () => {displaySortedNumbers(bubbleSort)});
document.getElementById("selectionSort").addEventListener("click", () => {displaySortedNumbers(selectionSort)});
