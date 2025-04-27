// In JavaScript, an object is a collection of key-value pairs (properties and methods).

// 👉 Simple definition:
// An object stores data (properties) and functions (methods) together.

// Singleton
//Object.create // THis is just like constructor or here is singleton


//Object literals

const mysym = Symbol("key1")
const JsUser= {
    name:"Rohit",
    "full name":"ROhit Kumar",
    age:18,
    [mysym] :"myKey", // Symbol ko aise declear karte hai object me 
    location :"Noida",
    email :"rsingh@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]); // We can not use it using. operator because it give us error
//console.log(JsUser[mysym]); // We see the type of the Value is String  and it return the value
//Object.freeze(JsUser);// After this We can not Change the Value of the Product.
JsUser.email="rohit@gmail.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
    return 1; // upar wale me mera function kuch return hi kar rha hai islie undefine hai aur niche wala me return kr rha hai 1.
}

console.log(JsUser.greeting);  // Undefine
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
