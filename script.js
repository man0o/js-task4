// 1---------

let array2 = [14, 150, 'css', null, 'javascript', 25];

let newArray = array2.map(element => {
    if (typeof element === 'number') {
        return element * element;
    } else if (typeof element === 'string') {
        return element.toUpperCase(); 
    } else {
        return element;
    }
});

console.log(newArray)


// 2 ---------

let info = 'good day';
let slice = info.slice(5, 8);

console.log(slice);

// 3 ----------

function returnStringLength (myName) {

    return myName.length
}

let myName = "giorgi"

let returnMynameLength = returnStringLength(myName)

console.log(returnMynameLength)


// 4 -------



// 5  ---------- 

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-3, 3, "strawberry");

console.log(fruits);

// 6 ----------
let numbers = [ 5, 25, 89, 120, 36]

numbers.push("javascript", "python");
numbers.unshift("html and css");

console.log(numbers.length);


numbers.shift();
numbers.pop();

console.log(numbers);

// 7 ------------



let fruitsArray = ['orange', 'banana', 'kiwi'];


console.log(fruitsArray.length);


fruitsArray.push('apple', 'pineapple');
fruitsArray.unshift('watermelon');
console.log(fruitsArray.length);

fruitsArray.splice(2,0, "mango")
fruitsArray.shift();
fruitsArray.pop();

console.log(fruitsArray.length);

// 8 -------

let array3 =[1, 2, 3, 4, 5]

array3.splice(3,0,"a","b","c")

console.log(array3)

// 9 -----------

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray5 = array5.map(function(element) {
    return element / 3
});

console.log(newArray5)

// 10 ---------
let array7 =  [15, 100, 25, 10, 36]
array7.splice(3,1)

console.log(array7)

// 11  ---------
 let array8 = [1, 2, 3 , 4 , 5]
 array8.splice(2,1,"three")

 console.log(array8)


// 12 -----

let array1 = ["hello1", 14, 24, "hello2"]

let array1Number = array1.filter(function(element) {

    return typeof element === `number` 
})

console.log(array1Number)


// 13 ------------

let link ="https://google.com";

function checkLink(link) {
    if (link.indexOf("https://") !== -1) {
        console.log("ki moicavs")
    }else {
        console.log("ara ar mocavs")
    }
}
console.log(link)


// 14  ----------


let array4 = [1, 2, 3, 4, 5];
let sum = 0;

array4.forEach(function(number) {
   
    sum += number;
});

console.log(sum);



// 15   -----------

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filteredLanguages = languages.filter(function(language) {
  return language.length > 3;
});

console.log(filteredLanguages);

// 16 --------------

let words = ['madrid', 'rome', 'milan', 'berlin'];

let filterM = words.filter(function(words) {

    return words.includes("m")
})

console.log(filterM)

// 17 -------------

let array6 = [-1, -2, -3, 4];

if (array6.some(num => num > 0)) {
    console.log("aris dadebiti ricxvi");
} else {
    console.log("ar aris dadebiti ricxvi");
}

 



