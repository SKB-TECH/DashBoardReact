import { useContext,useState,useEffect,createContext } from "react";

const StateContext=createContext();
const InitialState={
    chat:false,
    cart:false,
    useProfile:false,
    notification:false
}



export const ContextProvider=({children})=>{
    const [activeMenu,setActiveMenu] = useState(true)
    const [ischecked,setIschecked]=useState(InitialState)

    const handlClick=(checked)=>{
        setIschecked({...InitialState,[checked]:true})
    }
    return (
        <StateContext.Provider value={
            {activeMenu
            ,setActiveMenu,
            ischecked,
            setIschecked,
            handlClick
        }
        }>
        {children}
        </StateContext.Provider>
    )
}
export const useStateContext=()=>useContext(StateContext)

