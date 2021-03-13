import React from 'react'
import { Header } from './components'

import './styles.scss'

const Main = ({ children, title, hideAddButton, handleAddClick }) => {
    return (
        <main className="main">
            <Header title={title} hideAddButton={hideAddButton} handleAddClick={handleAddClick} />
            {children}
        </main>
    )
}

export { Main }