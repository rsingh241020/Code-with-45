// let myName = "Rohit   "
// let myNa = "chai   "

// console.log(myName.truelength)
// console.log(myName.trim().length)

let myHeros = ["shaktiman","Hatim"]

let heroPower={
    shaktiman :"FIre",
    Haitm:"Talwar",

    getHatimPower: function(){
        console.log(`Shakitman Power is${this.shaktiman}`);
    }
}

Object.prototype.rohit = function(){
    console.log("Rohit is Present is all Object");
}

Array.prototype.heroRohit = function(){
    console.log("Hii Rohit");
}

// heroPower.rohit()
myHeros.rohit()
myHeros.heroRohit()
// heroPower.heroPower() // Error
// User object
const User = {
    name: 'John Doe',
    email: 'johndoe@example.com'
};


//Inheritance


// Teacher inherits from User
const Teacher = {
    makVideos: true,
    __proto__: User
};

// TeacherSupport inherits from Teacher
const TeacherSupport = {
    isAvailable: false,
    __proto__: Teacher
};

// TASupport inherits from TeacherSupport
const TASupport = {
    makeAssignement: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport
};

// Testing the prototype chain
console.log(TASupport.makeAssignement); // 'JS assignment' (own property)
console.log(TASupport.fullTime);        // true (own property)
console.log(TASupport.isAvailable);     // false (inherited from TeacherSupport)
console.log(TASupport.makVideos);       // true (inherited from Teacher)
console.log(TASupport.name);            // 'John Doe' (inherited from User)


// Modern Property

Object.setPrototypeOf(TeacherSupport,Teacher)
let anotheUsername = "ChaiaueCode"

String.prototype.trueLength = function(){
    console.log(`${this}` );
    console.log(`True length is :${this.trim().length}`);
}
anotheUsername.trueLength()
"Rohit".trueLength()
