import React from 'react'
import { Aside, Footer, Header } from './components'
import './styles.scss'

const Layout = ({ children }) => {

    return (
        <div className="layout">
            <Aside />
            <div className="contenedor">
                <Header />
                { children }
                <Footer />
            </div>
        </div>
    )

}

export { Layout }