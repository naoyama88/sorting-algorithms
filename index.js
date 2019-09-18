let randomNumbers;

function displayNumbers() {
    randomNumbers = generateRandomNumbers(100);
    console.log('displayNumbers');
    document.getElementById("randomNumbers").innerHTML = randomNumbers;
}

function generateRandomNumbers(numnum) {
    console.log(numnum);
    console.log('generateRandomNumbers()');
    let randomNumArray = new Array();
    for (let i = 0; i < numnum; i++) {
        console.log("asdff");
        let tempNum = Math.floor((Math.random() * 100) + 1);
        randomNumArray.push(tempNum);
    }

    console.log(randomNumArray);
    return randomNumArray;
}

function displaySortedNumbers() {
    console.log("displaySortedNumbers()");

    let sortedArray = bubbleSort(randomNumbers);
    document.getElementById("boxRight").innerHTML = sortedArray;
}

document.getElementById("generateNumber").addEventListener("click", displayNumbers);
document.getElementById("bubbleSort").addEventListener("click", displaySortedNumbers);
