import { useContext,useState,useEffect,createContext } from "react";

const StateContext=createContext();
const InitialState={
    chat:false,
    cart:false,
    useProfileData:false,
    notification:false
}



export const ContextProvider=({children})=>{
    const [activeMenu,setActiveMenu] = useState(true)
    const [iscliked,setIsCliked]=useState(InitialState)
    const [screensize,setScreensize]=useState('undefinid')

    const handlClick=(checked)=>{
        setIsCliked({...InitialState,[checked]:true})
    }
    return (
        <StateContext.Provider value={
            {activeMenu
            ,setActiveMenu,
            iscliked,
            setIsCliked,
            handlClick,
            screensize,
            setScreensize
        }
        }>
        {children}
        </StateContext.Provider>
    )
}
export const useStateContext=()=>useContext(StateContext)

