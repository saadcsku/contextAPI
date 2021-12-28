import { useContext } from "react"
import { Name } from "./CompA"



const CompC = () =>{

    const student= useContext(Name)

    return (
        <>      
            <h1>Student Name: {student.name}</h1>
            <h1>Student ID: {student.id}</h1>
            <h1>Student Age: {student.age}</h1>
        </>
 
    )

}
export default CompC