import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const intialState = {
  chat: false,
  cart: false,
  userProfile: false,
  nontification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(intialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false)
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
 
 setThemeSettings(false) };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false) };

  const handleClick = (clicked) => {
    setIsClicked({ ...intialState, [clicked]: true });
  };
  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        setIsClicked,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        setColor,
        setMode,
        themeSettings, setThemeSettings
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
