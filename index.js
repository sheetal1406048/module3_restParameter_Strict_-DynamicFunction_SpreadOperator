//console.log("hello World")

// "use strict";

// myname()
// function myname(){
//     name : "sheetal";
// }

//spread Operator

var array1 = [1,2,3];
var array2 =[4,5,6];
//array2 = [...array1,4,5,6];
var array3 = [...array1,...array2]
//console.log(array2)
//console.log(array3)

var array4 = [1,2,3,...array2,7,8,9]
//console.log(array4)
//console.log(array4.length)

//var result = array1.push(array2)
//console.log(array1)
//onsole.log(array1[3])


//Rest Parameter

function add(a,b,c,...numbers){
    let sum = 0;
    for(let num of numbers){
        sum+=num
    }
    return sum;
}

var result = add(1,2,3,4,5,6,7,8,9,10)
//console.log(result)

//Dynamic Function

var dynamicFunctionName = function(name){
    return name;

}

var result = dynamicFunctionName("sheetal")
console.log(result)