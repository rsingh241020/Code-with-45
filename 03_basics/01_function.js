console.log()

function sayMyName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}

//sayMyName()

// function addTwoNumber(number1,number2){ // Parameter
//     console.log(number1+number2)
// }
function addTwoNumber(number1,number2){ // Parameter
    return number1+number2
}



 const result =  addTwoNumber(7,5) // Arguments

// console.log("Result is",+result);

function loginUserMessage(username){ //username = 'abc' jo ki always Yahi naam dega .
    if (username===undefined){ //(!username)
  //      console.log(`Please Enter a User Name`)
        return;
    }
    return `${username} just logged In `
}

//console.log(loginUserMessage("Rohit"))



function calculateCartPrice(...num1){ // ... are known as restOperator and spreadOperater
    //                     (val1,val2,...num3)
    return  num1
}
//console.log(calculateCartPrice(2,300,23))

const user = {
    username : "Rohit",
    prices: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,320,322,500]

function returnSecoundValue(getArray){
    return getArray[1];
}
console.log(returnSecoundValue(myNewArray));
