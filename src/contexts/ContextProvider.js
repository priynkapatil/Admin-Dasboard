import React, { createContext, useContext, useState } from 'react';

const stateContext = createContext();

const intialState = {
    chat:false,
    cart:false,
    userProfile:false,
    nontification:false,
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(intialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) =>{
        setIsClicked({...intialState,[clicked]:true})
    }
    return(
        <stateContext.Provider value={{
            activeMenu,setActiveMenu,setIsClicked,isClicked,handleClick,screenSize, setScreenSize
        }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);