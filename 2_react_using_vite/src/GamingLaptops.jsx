import React from 'react'
import EachGamingLaptop from './EachGamingLaptop'

function GamingLaptops() {
    //There is an array of student object

    const students = [
        {
            name: "Amit",
            age: 22,
            gender: "Male"
        },
        {
            name: "Ankit",
            age: 20,
            gender: "Male"
        }
    ]
    
  return (
    <div className="main flex flex-wrap gap-3">
        {/* Using map to return data     */}
        {students.map((element)=>{
            return <EachGamingLaptop
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