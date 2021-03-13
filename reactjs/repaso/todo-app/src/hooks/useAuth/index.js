import { AuthContext } from 'contexts/AuthProvider'
import { useContext } from 'react'
import { firebase } from 'utils'


const useAuth = () => {

    const { setIsAuthenticated } = useContext(AuthContext)

    const login = (email, pass) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(response => {
                if(response.user.uid !== '') {
                    setIsAuthenticated(true)
                }
            })
    }

    const logout = () => {

    }

    const register = () => {

    }

    return { login, logout, register }
}

export { useAuth }