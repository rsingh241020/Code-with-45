const marvel_heros =["thor","IronMan","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//const AllHeros = marvel_heros.concat(dc_heros); //THis is wrong way

//console.log(AllHeros);


const all_newHeros = [...marvel_heros,...dc_heros];// Spreading
//console.log(all_newHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); // FLat is used for the adding the all  value in a lot of array.
console.log(real_another_array);


//console.log(Array.isArray("ROhit")); // Chek is it array.
//console.log(Array.from("ROhit"));// It makes all the array of the String

//console.log(Array.isArray({name: "Rohit"}));// It give us not an array Because it confuse 
//which is for array key or value but Remember it always give us a blank array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // It convert in the array




