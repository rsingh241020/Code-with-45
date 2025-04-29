const user = {
    username: "ROhit",
    price: 999,
// This keyword refer to current context.
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to The Website`)
        console.log(this) //here show the reference of the welcomemessage
    }
}
//user.welcomeMessage()
// user.username="Ravi"
// user.welcomeMessage()

//console.log(this) //{} empty because here it not have reference but in window it show global window

// function chai(){
//     let username ="ROhit"
//     console.log(this.username);
// }

// chai()

// const chai = ()=>{
//     let username = "Rohit"
//     console.log(this.username)
// }
// chai()

// const addTwoNum = (num1,num2) =>{ // Arrow Function
//     return num1+num2;
// }


//const addTwoNum = (num1,num2) => num1+num2;
//const addTwoNum = (num1,num2) => (num1+num2);

const addTwoNum = (num1,num2) => ({username:"ROhit"}); // Object Passing
console.log(addTwoNum(5,4));


const myArray = [3,5,3,4];
