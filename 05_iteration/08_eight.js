const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curr) {
//     console.log(`acc: ${acc} and curr : ${curr}`)
//     return acc+curr
// },0)


const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemname :"js Course",
        price :999
    },
    {
        itemname :"js Course",
        price :996
    },
    {
        itemname :"js Course",
        price :993
    },
    {
        itemname :"js Course",
        price :999
    }

]

const pricePay = 
shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(pricePay)