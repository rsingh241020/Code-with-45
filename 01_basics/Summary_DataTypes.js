// Types of Data Types
//Primitive (7) call By Value :
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint


const score =100;
const scoreVAlue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail; // Undefine
const id =Symbol('123');
const anotherId=Symbol('123')
console.log(id===anotherId)


const bugNumber = 233423423452342n // n show the bigInt


// Non Primitive (Reference Type) // Main Object and Events dono Bahut Jaruri Hai
// Arrays
// Objects
// Function

const heros =["Shaktiman" ,"hthim","Ravan"];

let myObj ={
    name:"Rohit",
    age :22,
}

const myFunction = function(){
 //   console.log("Hello World");
}


// Memory Management


// Stack - (Primitive)   Heap - Non Primitive DataTypes
let myYouTubeName = "itsrsingh";
let anothername = myYouTubeName;
anothername = "chaiOrCode"
console.log(anothername);
console.log(myYouTubeName); // No Change Beacuse there is the memory from Heap and it use the only reference

let user = {
    email:"user@google.com",
    upi:"user@ypl"
}

let user2 = user
user2.email = "rohit@gmail.com"
console.log(user.email)
console.log(user2.email) // Here Change the Value of user and user2 it means that the value is change in the memory




