import React from 'react'

const Header = ({ title }) => {

    return (
        <header>
            <h1 className="title">{title}</h1>
            <button className="btn btn-primary">
                Agregar
            </button>
        </header>
    )

}

export { Header }