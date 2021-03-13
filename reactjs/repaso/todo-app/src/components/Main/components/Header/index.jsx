import React from 'react'

const Header = ({ title, hideAddButton, handleAddClick }) => {

    return (
        <header>
            <h1 className="title">{title}</h1>


            { !hideAddButton &&
                <button className="btn btn-primary" onClick={handleAddClick}>
                    Agregar
                </button>
            }

        </header>
    )

}

export { Header }