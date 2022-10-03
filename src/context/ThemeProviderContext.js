import React, { createContext, useContext, useEffect, useState } from 'react'

const themeContext = createContext()

export const ThemeState = () => useContext(themeContext)

const ThemeProviderContext = ({children}) => {
  const [dark, setDark] = useState(false)

   
  

  return (
    <themeContext.Provider 
    value={{
        dark,
        setDark
    }}
    >
        {children}
    </themeContext.Provider>

    
  )
}

export default ThemeProviderContext