// function print first N number
function printNumbersTill(N) {
    for(i=0;i<=N;i++){
        console.log(i)
    }
}

printNumbersTill(20)

function getGreetingTo(name) {
    console.log("Hello " + name)
}

getGreetingTo("Mark")

let add = (a, b) => {
    return a + b;  // the return keyword will give you back the result
  };
  
console.log(add(1, 2)) // will print 3

for (i=0;i<20;i++){
    if(i%2 == 0) {
    console.log("Even number "+i);
    }
}

function printValues(array){
    for(i=0;i<array.length;i++){
        console.log(array[i])
    }
}
let myArray=[20,23,31,4,5,6]
printValues(myArray)



function printEach(array) {
    array.forEach((number) => {
        console.log(number);
    });
}

console.log("each")
printEach(myArray)