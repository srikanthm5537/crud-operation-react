import React, { createContext } from "react";
import Home from "../Compoents/Home"
export const AppContext = createContext()
function HomeContext({ children }) {

    

    // const [names, setNames] = useState("Srikanth")
    let names = "Srikanth";

 return <AppContext.Provider value={names}>
    <Home />
 </AppContext.Provider>
}

//  const useGlobalContext = () => {
//       return useContext(AppContext)
//     }
    
//     export { AppContext, useGlobalContext }
export default HomeContext