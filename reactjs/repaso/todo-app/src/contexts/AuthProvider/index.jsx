import { createContext, useEffect, useState } from 'react'
import { firebase } from 'utils'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState()

    useEffect(() => {
        console.log(firebase.auth().onAuthStateChanged((user) => {
            if(user.uid !== '') {
                setIsAuthenticated(true)
            }
        }))
    }, [])

    return (

        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>

    )

}

export { AuthProvider, AuthContext }