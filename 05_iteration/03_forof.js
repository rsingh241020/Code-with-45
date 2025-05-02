// for Of
//["","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
// }

// const greeting = "Hello World!"

// for(const greet of greeting){
//     console.log("Each Character is" ,greet)
// }

//Maps
const map = new Map() // Map is known for unique value
map.set('In',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('Fr',"FRANCE")

//console.log(map)

for(const key of map){
   // console.log(key)
}

for(const [key,value] of map){
    console.log(key,':-',value)
}

const myObj = {
    'game1' :'CRICKET',
    'game2':'HOCKEY'
}
// for of loop is notworking for the object

for (const key in myObj) {
    console.log(key)// only key
    console.log(`${key} game is for ${myObj[key]}`); // for both 
}

const programming = ['js','c++','java','c'] // here key means index
for (const key in programming) {
    console.log(key);
}

