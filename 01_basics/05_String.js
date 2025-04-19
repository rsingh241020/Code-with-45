const name ="Rohit";
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`Hello My Name is ${name} and my Repo Count is ${repoCount} .`);

const gameName = new String('Rohit');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('t'));
// console.log(gameName.trim()); // Remove the Space from end and to start  
// console.log(gameName.substring(0,4)); // Last digit nhi leta hai

const newString = gameName.slice(-4,3);
console.log(newString);

let str = "JavaScript";
console.log(str.slice(-6));      // "Script"
console.log(str.slice(-6, -3));  // "Scr"

const url = "http://rohitsinghabcxotiv.com";
console.log(url.replace('rohit','singh'));
if (url.includes("Rohit")) {
    console.log("Yes, 'rohit' is in the URL");
}
else{
    console.log("No");
}
console.log(url.split('s')); // It works likes the divide in array
