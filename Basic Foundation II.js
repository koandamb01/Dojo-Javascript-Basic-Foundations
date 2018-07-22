/*ooo        ooooo                oooooo   oooooo     oooo            .o8               oooo               ooooo ooooo 
`88.       .888'                 `888.    `888.     .8'            "888               `888               `888' `888' 
 888b     d'888   .ooooo.         `888.   .8888.   .8'    .ooooo.   888oooo.           888  .oooo.o       888   888  
 8 Y88. .P  888  d88' `88b         `888  .8'`888. .8'    d88' `88b  d88' `88b          888 d88(  "8       888   888  
 8  `888'   888  888   888          `888.8'  `888.8'     888ooo888  888   888          888 `"Y88b.        888   888  
 8    Y     888  888   888           `888'    `888'      888    .o  888   888          888 o.  )88b       888   888  
o8o        o888o `Y8bod8P'            `8'      `8'       `Y8bod8P'  `Y8bod8P'      .o. 88P 8""888P'      o888o o888o 
                                                                                   `Y888P                                                                                                                                               
                                                                                                                     */
// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
            console.log("Positive number find!");
        }
    }
    return arr;
}

// Print Low, Return High - Create a function that takes array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.
function printLowerReturnHigher(arr) {
    var lowest = highest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (lowest > arr[i]) {
            lowest = arr[i];
        }
        if (highest < arr[i]) {
            highest = arr[i];
        }
    }
    console.log("The lowest number of the array is: ", lowest);
    return highest;
}

// Print One, Return Another - Build a function that takes array of numbers.  
// The function should print second-to-last value in the array, and return first odd value in the array.
function printOneReturnAnother(arr) {
    console.log("The second to last number of the array is: ", arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing original.
function double(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    console.log("Old array: ", arr);
    console.log("New array: ", newArr);
    return newArr;
}

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!"
function evensAndOdds(arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
            console.log("That's odd!");
        }

        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("Even more so!");
        }
    }
}

// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, 
// specifically those whose index is odd (arr[1], [3], [5], etc).  
// Afterward. console.log each array value and return arr.
function incrementSecond(arr) {
    console.log("Old array: ", arr);
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] + 1;
        console.log("Index ", i, " value was increment!");
    }
    console.log("New array: ", arr);
    return arr;
}

// Previous Lengths - You are passed an array containing strings.  
// Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function previousLengths(arr) {
    var str;
    for (var i = arr.length - 1; i > 0; i--) {
        str = arr[i - 1].length;
        arr[i] = str;
    }
    return arr;
}

// Add Seven to Most - Build function that accepts array. 
// Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSevenToMost(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

// Reverse Array - Given an array, write a function that reverses values, in-place.  
// Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
    var swapper;
    console.log("Old array is ", arr);
    for (var i = 0; i < arr.length / 2; i++) {
        swapper = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = swapper;
    }
    console.log("New array is ", arr);
    return arr;
}

// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, 
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function returnNegatives(arr) {
    console.log("Old array: ", arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
    }
    console.log("New array: ", arr);
    return arr;
}

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    var eat = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            eat = true;
        }
    }
    if (eat == false) {
        console.log("I'm hungry")
    }
}

// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapTowardCenter(arr) {
    var swapper;
    console.log("Old array: ", arr);
    for (var i = 0; i < arr.length / 2; i += 2) {
        swapper = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = swapper;
    }
    console.log("New array: ", arr);
    return arr;
}

// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, 
// and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleArray(arr, num) {
    console.log("Old array: ", arr);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    console.log("New array: ", arr);
    return arr;
}