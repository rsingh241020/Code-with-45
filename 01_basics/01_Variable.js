const accountId = 155
let accountEmail = "rohti@gmail.com"
var accountPassword= "12345"
accountCity= "Noida" // Dont do like this 
let accountState; // By default it takes undefine 

//accountId =123 // Const can not be update 

accountEmail = "123@gmail.com"
accountPassword = "12345"
accountCity = "Gr Noida"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
 Prefer Not to use var because of issue in block and functional scope
 {
 }
*/