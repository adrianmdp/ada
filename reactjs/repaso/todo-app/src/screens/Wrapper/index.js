import React, { useContext, useEffect } from 'react'
import { AuthContext } from 'contexts'
import { Private, Public } from 'screens'
import { firebase } from 'utils'

const Wrapper = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)    

    return (
        isAuthenticated ? <Private /> : <Public />
    )

}

export { Wrapper }