// Array
const myArray = [0,1,2,3,4,5];
const myHeros = ["shaktiman",'hatim'];
const myArr= new Array(3,4,34,'false',"Ravi");

//console.log(myArr[1]);

//Deepcopy- A deep copy creates a new object along with recursively copied nested objects. This means the copy is completely independent of the original. Changes made in the copied object (even in nested structures) do not affect the original.


//ShallowCopy -A shallow copy creates a new object, but it copies only the top-level properties. If the original object contains nested objects (like arrays or other objects), the copy will still reference those nested objects. So, changes in the nested structures of the copy will reflect in the original.

//Array Methods

myArr.push(6);
//console.log(myArr);
myArr.pop();
//console.log(myArr); // Remove 6
myArr.unshift(0);//add the element in the starting
//console.log(myArr);
myArr.shift(); // Remove from the starting

//console.log(myArr);

//console.log(myArr.includes(4)); // true (ye hai )
//console.log(myArr.indexOf(3)); //0 (available) if Not availabe then it beacomes -1
const newArr = myArr.join()

//console.log(myArr); // It prints Normal Array.

//console.log(newArr); // It give us String

//slice and splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3) // ye 1 se suru karega aur 2 tak jaega main array me kuch n karega 

console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3) // ye bas 1 se suru hoga aur 3 tak jaega but memory me bhi change kar dega jo splice ke andar nhi aaega bas usi ko rakhega 

console.log("C ",myn2);

console.log("A ",myArr);