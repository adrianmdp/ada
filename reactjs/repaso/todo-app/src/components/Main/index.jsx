import React from 'react'
import { Header } from './components'

import './styles.scss'

const Main = ({ title }) => {
    return (
        <main className="main">
            <Header title={title} />
        </main>
    )
}

export { Main }