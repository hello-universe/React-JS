const arr = [
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

// If I want to remmove object with id = 3

let newArr = arr.filter((ele)=>{
    return ele.id !== 3;
})
console.log(newArr);