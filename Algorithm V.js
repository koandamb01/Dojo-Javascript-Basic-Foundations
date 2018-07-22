/*ooo        ooooo                oooooo   oooooo     oooo            .o8            
`88.       .888'                 `888.    `888.     .8'            "888            
 888b     d'888   .ooooo.         `888.   .8888.   .8'    .ooooo.   888oooo.       
 8 Y88. .P  888  d88' `88b         `888  .8'`888. .8'    d88' `88b  d88' `88b      
 8  `888'   888  888   888          `888.8'  `888.8'     888ooo888  888   888      
 8    Y     888  888   888           `888'    `888'      888    .o  888   888      
o8o        o888o `Y8bod8P'            `8'      `8'       `Y8bod8P'  `Y8bod8P'                                         
                                                                                   
                                                                                   */

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