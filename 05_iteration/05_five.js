const coding = ["js","ruby","java","python","cpp"]

// const values = coding.array.forEach(element => {
//     console.log(item);
//     return item;// for each loop doesn't return anything it return undefine.
// });

// console.log(values);

const myNumms = [1,2,3,4,5,6,7,8,9,10]

// const new_nums=myNumms.filter((num)=>
//     {
//         return num>4 // if we use scope then return the use kwyword
//     } ) // return  the after implement the code 
// console.log(new_nums);

// const newnums=[]
// myNumms.forEach((num)=>{
//     if(num>4){
//         newnums.push(num);
//     }
// })

// console.log(newnums)

const books = [
    { title: "Book One", genre: "Fiction", publish: 1982, edition: 200 },
    { title: "Book Two", genre: "History", publish: 1995, edition: 150 },
    { title: "Book Three", genre: "Science", publish: 2005, edition: 180 },
    { title: "Book Four", genre: "Biography", publish: 2010, edition: 220 },
    { title: "Book Five", genre: "Mystery", publish: 2012, edition: 170 },
    { title: "Book Six", genre: "Fantasy", publish: 2016, edition: 300 },
    { title: "Book Seven", genre: "Fiction", publish: 2018, edition: 250 },
    { title: "Book Eight", genre: "Horror", publish: 2003, edition: 110 },
    { title: "Book Nine", genre: "Romance", publish: 2020, edition: 275 },
    { title: "Book Ten", genre: "Adventure", publish: 2023, edition: 320 }
];

let userBooks = books.filter((bk) => bk.genre==='History')

userBooks = books.filter((bk) =>{return bk.publish>=2020})
console.log(userBooks);
