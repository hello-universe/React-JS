import React from 'react'
import EachGamingLaptop from './EachGamingLaptop'

//We can also import json without being explicitly writing it inside this jsx
import students from './data.json'

function GamingLaptops() {
    //There is an array of student object

    // const students = [
    //     {
    //         id: 1,
    //         name: "Amit",
    //         age: 22,
    //         gender: "Male"
    //     },
    //     {
    //         id: 2,
    //         name: "Ankit",
    //         age: 20,
    //         gender: "Male"
    //     }
    // ]
    
  return (
    <div className="main flex flex-wrap gap-3">
        {/* Using map to return data     */}

        {/* Passing the key as the index of the array */}

        {/* {students.map((element, index)=>{
            return <EachGamingLaptop
            key = {index}
            id = {element.id}
            name = {element.name}
            age = {element.age}
            gender = {element.gender}
            />
        })} */}

        {/* Passing key manually */}

        {students.map((element)=>{
            return <EachGamingLaptop
            key = {element.id}
            name = {element.name}
            age = {element.age}
            gender = {element.gender}
            />
        })}


        {/* We can send props from here. Props means properties */}
        {/* <EachGamingLaptop name={student1.name} age={student1.age} gender={student1.gender}/>
        <EachGamingLaptop name={student2.name} age={student2.age} gender={student2.gender}/> */}

    </div>
  )
}

export default GamingLaptops