import React, { useState } from 'react'
import { useAuth } from 'hooks'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const { login } = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault()

        login(email, pass)
    }

    return (

        <div>
            <h2>Login</h2>


            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Contraseña</label>
                    <input 
                        type="password" 
                        name="pass" 
                        value={pass} 
                        onChange={(event) => setPass(event.target.value)} />
                </div>

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>

    )

}

export { Login }