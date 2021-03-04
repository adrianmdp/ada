import React, { useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [color, setColor] = useState('red')
    const [height, setHeight] = useState(300)


    return (
        <ThemeContext.Provider value={{
            color,
            setColor,
            height,
            setHeight,
        }}>
            {children}
        </ThemeContext.Provider>
    )

}

export { ThemeProvider, ThemeContext }