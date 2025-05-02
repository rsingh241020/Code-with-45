const lan= ["js","ruby","css","html"]

// lan.forEach(function (val)
//     console.log(val)
// }) // call by function ka naam nhi hota hai


// lan.forEach ((item)=>{
//     console.log(item);
// })

const myCoding =[
    {lanName :"Java",
    lanFName:"java"
    },
    {lanName :"python",
        lanFName:"py"
    },
    {lanName :"Css",
        lanFName:"css"
    }
    ]
    myCoding.forEach((element) => {
    console.log(element.lanName);
});