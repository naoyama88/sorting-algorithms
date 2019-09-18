function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function genPrimes(numOfPrimes) {
    var cnt = 0;
    var num = 0;
    var list = [];
    while (cnt < numOfPrimes) {
        if (isPrime(num) == true) {
            cnt++;
            list.push(num)
        }
        num++;
    }
    return list;
}
