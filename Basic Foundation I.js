/*ooo        ooooo                oooooo   oooooo     oooo            .o8       
`88.       .888'                 `888.    `888.     .8'            "888       
 888b     d'888   .ooooo.         `888.   .8888.   .8'    .ooooo.   888oooo.  
 8 Y88. .P  888  d88' `88b         `888  .8'`888. .8'    d88' `88b  d88' `88b 
 8  `888'   888  888   888          `888.8'  `888.8'     888ooo888  888   888 
 8    Y     888  888   888           `888'    `888'      888    .o  888   888 
o8o        o888o `Y8bod8P'            `8'      `8'       `Y8bod8P'  `Y8bod8P' 
                                                                              
                                                                              
                                                                              */

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function get1To255() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// You may use a modulus operator for this exercise.
function getEven1000() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
            console.log("Even number: ", i);
        }
    }
    console.log("Sum of all even number from 1 to 1000: ", sum);
}


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
function sumOdd5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum += i;
            console.log("Odd number: ", i);
        }
    }
    console.log("Sum of all odd numbers from 1 to 5000: ", sum);
}

// Iterate an array - Write a function that returns the sum of all the values within an array. 
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArrayValues(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Find max - Given an array with multiple values, 
// write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// Find average - Given an array with multiple values, 
// write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr) {
    var sum = arr[0];
    var avg;
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOdd() {
    var arr = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 != 0) {
            arr.push(i);
            console.log(i, ": was push into the array!");
        }
    }
    return arr;
}

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, 
// your function will return 2. (There are two values in the array greater than 3, which are 5, 7)
function greaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
            console.log(arr[i], " is greater than y");
        }
    }
    return count++;
}

// Squares - Given an array with multiple values, 
// write a function that replaces each value in the array with the product of the original value squared by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])
function squaresArrValue(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// Negatives - Given an array with multiple values, 
// write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function nonNegativesArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
            console.log("Oops a negative find! it will convert it to 0");
        }
    }
    return arr;
}

// Max/Min/Avg - Given an array with multiple values, 
// write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvgArray(arr) {
    var max = min = sum = arr[0];
    var avg;
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    var newArr = [max, min, avg];
    return newArr;
}


// Swap Values - Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapFirstLast(arr) {
    var temp;
    console.log("Old array: ", arr);
    if (arr.length >= 2) {
        temp = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[0] = temp;
    }
    console.log("New array: ", arr);
    return arr;
}

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function negToString(arr) {
    console.log("Old array: ", arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo is the best";
        }
    }
    console.log("New array: ", arr);
    return arr;
}