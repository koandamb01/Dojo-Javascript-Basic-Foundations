// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(myArr, y) {
    var count = 0;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > y) {
            count++;
        }
    }
    return count++;
}
var arr = [3, 5, 5, 7, 20, 10, -5, 12];
var y = 6;
console.log(greaterThanY(arr, y));


// Given an array, print the max, min and average values for that array.
function PrintMaxMinAvg(myArr) {
    var max = min = sum = myArr[0];
    var avg;
    for (var i = 1; i < myArr.length; i++) {
        if (max < myArr[i]) {
            max = myArr[i];
        }

        if (min > myArr[i]) {
            min = myArr[i];
        }
        sum += myArr[i];
        avg = sum / myArr.length;
    }
    console.log("Max:", max, " Min:", min, " Average:", avg);
}
PrintMaxMinAvg(arr);


// Given an array of numbers, create a
// function that returns a new array where negative values were replaced with the string‘ Dojo’.
// For example, replaceNegatives([1, 2, -3, -5, 5]) should return [1, 2, "Dojo", "Dojo", 5].
function replaceNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "dojo";
        }
    }

    return arr;
}
console.log(replaceNegatives([1, 2, -3, -5, 5]));


// Given array, and indices start and end, remove vals in that index range, 
// working in-place (hence shortening the array).  
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, strt, end) {
    var starter = strt;
    var shifter = end + 1;

    console.log(arr);
    while (shifter < arr.length) {
        arr[starter] = arr[shifter];
        starter++;
        shifter++;
    }
    console.log(arr);
    console.log("Starter: ", starter, " Shifter: ", shifter);

    for (var i = starter; i < shifter; i++) {
        arr.pop();
    }
    console.log(arr);
}
removeVals([20, 30, 40, 50, 60, 70], 2, 4);