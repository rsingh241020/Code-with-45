const user = {
    username:"Rohit",
    loginCount: 8,
    signedIn: true,

    detailsOfUser : function(){
        //console.log("Got User Details ")
        //Console.log(`Username: ${this.username}`)
        console.log(this);
    }
}

console.log(user);
console.log(user.detailsOfUser());
// console.log(this)// {}

// Constructor Function 

function User(username,loginCount,islogged){
    this.username=username;
    this.loginCount=loginCount;
    this.islogged=islogged;

    return this // use and not no effect
}

const userOne =new User("ROhit",23,true);
const userTwo =new User("ChaiOrcode",33,false);

console.log(userOne)