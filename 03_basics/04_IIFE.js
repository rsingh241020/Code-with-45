//Immediately Invoked Function Expression (IIFE)
//ISka Use Hamlog GLobal Pollution ko remove karne ke lie karate Hia
(
function chai(){
    //NAMED IIFE
    console.log(`DB CONNECTED`)
})(); //IIFE

//Just like chai()  ()() one for the function and one for IIFE

( (name) => {
    //Un named IIFI
    console.log(`DB CONNECTED  ${name}`);
})('ROhit');

// Always use ; in last IIFE Because it close the invoked Function .
