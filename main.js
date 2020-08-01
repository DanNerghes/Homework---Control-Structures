// 1.display in the console the numbers from 1 to 20

function displayNumbers() {
    console.log('Numbers from 1 to 20: ');
    for(let i = 1; i <= 20; i++) {
        console.log(i);
    }
};

displayNumbers();

// 2.display in the console the odd numbers from 1 to 20

function displayOddNumbers() {
    console.log('Odd numbers from 1 to 20: ');
    for(let i = 1; i <= 20; i++){
        if(i % 2){
            console.log(i);
        }
    }
};

displayOddNumbers();

// 3.compute the sum of the elements of an array and display it in the console

function sumOfTheElementsOAnfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log('The sum of the elements ' + arr + ' is: ' + sum);
}

const myArr = [1, 7, 3, 5, 4, 1, 3, 1, 1, 4];

sumOfTheElementsOAnfArray(myArr);

// 4.compute the maximum of the elements of an array and display it in the console

function maximumFromArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log('The maximum number in the array is: ' + max);
}

maximumFromArr(myArr);

// 5.compute how many times a certain element appears in an array

function elementCounter(element, arr) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === element) {
            counter +=1
        }
    }
    console.log("The element '" + element + "' has being found " + counter + " times.");
}

elementCounter(1, myArr);

// Challenge
// 1.using nested for generate the following pattern
// 0 1 0 1
// 1 0 1 0
// 0 1 0 1
// 1 0 1 0

function generatePattern() {
    const row = 4;
    const col = 4;
    let str = '';

    for(let i = 0; i < row; i++) {
        if(i %2){
            for(let j = 0; j < col; j++) {
                j % 2 ?
                    str += '0 ':
                    str += '1 ';
            }
            console.log(str);
            str = '';
        }
        else{
            for(let j = 0; j < col; j++) {
                j % 2 ?
                    str += '1 ':
                    str += '0 ';
            }
            console.log(str);
            str = '';
        }
    }
}

console.log('Pattern challenge: ');
generatePattern();