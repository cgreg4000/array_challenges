console.log("1. Always Hungry")

function alwaysHungry(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
            count++
        }
    }
    if (count == 0) {
        console.log("I'm Hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log("")

console.log("2. High Pass Filter")

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log("")

console.log("3. Better Than Average")

function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var average = sum / arr.length
    var count = 0
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > average) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log("")

console.log("4. Array Reverse")

function reverse(arr) {
    var temp = 0;
    var right = arr.length - 1;
    for (var left = 0; left < arr.length / 2; left++) {
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        right--
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

console.log("")

console.log("5. Fibonacci Array")

function fibonacciArray(n) {
    var fibArr = [0, 1];
    var sum = 0
    if (n <= 0) {
        fibArr = []
    }
    else if (n <= fibArr.length) {
        if (n == 1) {
            fibArr.pop()
        }
    }
    else
        while (fibArr.length < n) {
            sum = fibArr[(fibArr.length - 1)] + fibArr[(fibArr.length - 2)]
            fibArr.push(sum)
        }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

