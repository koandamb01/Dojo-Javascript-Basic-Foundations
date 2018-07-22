// 2) Create an array with all the odd integers between 1 and 255 (inclusive)
function printAverage(x) {
    var sum = 0,
        avg = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    avg = sum / x.length;
    return avg;
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5


// 2) Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddArray() {
    var myArr = [];

    for (var i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            myArr.push(i);
        }
    }
    return myArr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]


// 3) Square each value in a given array, returning that same array with changed values.
function squareValue(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i];
    }
    return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]


// function to remove an array value from a range index a to b
var arr = [2, 3, 5, 8, 9, 10, 19, 20, 12];
strt = 2;
end = 5;
console.log(arr);

function removeSection(arr, strt, end) {
    var starter = strt; // start = 2
    var shifter = end + 1; // shifter = 6

    while (shifter < arr.length) {
        arr[starter] = arr[shifter];
        starter++;
        shifter++;
    }

    console.log(arr);
    for (var i = starter; i < shifter; i++) {
        arr.pop();

    }
    console.log(starter);
    console.log(shifter);
    console.log(arr);
}
removeSection(arr, strt, end);


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


// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }

    return arr;
}

console.log(resetNegatives([1, 2, -1, -3]));
// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(arr) {
    var temp;

    for (var i = 0; i < arr.length / 2; i++) {

        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }

    return arr;
}
console.log(returnReversed([1, 2, 3, 4, 5, 6]));

// Create a function that changes a given array to list each original element twice, 
// retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) 
// should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(arr) {
    var original_leng = arr.length;
    arr.length *= 2;

    for (var i = original_leng - 1; i >= 0; i--) {
        arr[i * 2 + 1] = arr[i];
        arr[i * 2] = arr[i];
    }
    return arr;
}

repeatTwice([5, 3, 1, 6, 7]);