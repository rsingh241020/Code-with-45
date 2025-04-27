//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name = "Ravi"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularuser ={
    email:"ravi@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ravi",
            lasrName:"Kumar"
        }
    }
}

//console.log(regularuser.fullName.userFullName.firstName);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) // we can give or not this paranthesis.

//console.log(obj3);
//console.log(obj1===obj3);
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);
 // spread using and combine the all values form object.
const user = [
    {
        id: 1,
        email:"rsing@gmail.com",

    },
    {
        id: 2,
        email:"rsing@gmail.com",

    },
    {
        id: 3,
        email:"rsing@gmail.com",

    }
]

//console.log(user[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// for the property


const course = {
    coursename:"Js in Hindi",
    price:"990",
    courseInstructor:"Rohit"
}
const {courseInstructor : instructor} = course // Object Destructure
//console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) =>{

// }
// navbar(company ="Rohit1") this part of the react

//Api Concept ( Application Programming Interface )
// It is like a messenger between two software programs.
// It helps them talk to each other and exchange information.


// {
//     "name":"Rohit",
//     "courseName":"Ravi",
//     "price": "free"
// }

