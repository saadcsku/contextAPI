import { createContext } from "react"
import CompB from "./CompB"

const Name = createContext()

const CompA = () =>{

    const student = {
        name: "Saad",
        id: 20,
        age: 32,
        isActive: true
    }


    return (
        <Name.Provider value={student}>
            <CompB  />
        </Name.Provider>
        
    )

}
export default CompA
export {Name};