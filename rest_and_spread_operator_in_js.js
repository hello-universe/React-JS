//Use of spread operator
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5, 6]
console.log(arr2)

//Use of rest operator

function sum(...arr){
    return arr.reduce((accumulator, currentNumber)=>{
        return accumulator+currentNumber;
    })
}
console.log(sum(...[5, 6, 2, 9, 8]))

const sumAgain = arr2.reduce((accumulator, curerntNumber)=>accumulator+curerntNumber)
console.log(sumAgain)

//Rest operator can also be use for destructuring
const [first, second, ...rest] = [4, 2, 5, 9, 7]

console.log(first)
console.log(second)
console.log(rest)

//For objects
const aTask = {
    title: "Do homework",
    user: "Amit",
    isDone: false
}
const newStatus ={
    ...aTask, isDone:true
}
console.log(newStatus)

const arr3 = [
    {
        id: 1,
        name: "Biscuit",
        quantity: 0
    },
    {
        id: 2,
        name: "Chocolate",
        quantity: 0
    },
    {
        id: 3,
        name: "Toffee",
        quantity: 0
    },
    {
        id: 4,
        name: "Kurkure",
        quantity: 0
    }
];
const arr4 = [...arr3];
const productToFind = {
    id: 3,
    name: "Toffee"
}
const result =   arr4.find((eachProduct)=>{
    return eachProduct.id == productToFind.id;
})
console.log(result)
const newProductToFind = {
    ...productToFind, quantity: 1
}
newProductToFind.quantity += 1
let arr5 = [...arr3, newProductToFind]
console.log(arr3)
// console.log(newProductToFind)

