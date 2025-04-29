
{} //SCOpe
if(true){
    let a = 10
    const b=20
    var c = 30 // var is global level it goes oout
    console.log("INNER: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rohit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); error
    two()
}
//one()

if(true){
    const username = "ROhit"
    if(username==="ROhit"){
        const website =" Github"
        //console.log(username + website)

    }
    //console.log(website) /error
}
//console.log(username) Error


//+++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++
console.log(addone(5));// Code is Working 
function addone(num){
    return num+1;
}

addt(5); // Error

const addt = function(num){
    return num+1;
}
addt(5);