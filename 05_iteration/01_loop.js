let a = 10;
for (let i =1;i <=10;i++) {
    const element = 10*i;
    //console.log(element);
}

const names = ["Rohit", "Amit", "Neha", "Priya", "Sahil"];

for(let i = 0; i < 3; i++) {
    //console.log(names[i]);
}

// break and continue

// for (let index = 1; index <=20; index++) {

//     if(index==5){
//         console.log(`We got 5 `)
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <=20; index++) {

    if(index==5){
        console.log(`We got 5 Continue`)
        continue;
    }
    console.log(`value of i is ${index}`);
    
    
}