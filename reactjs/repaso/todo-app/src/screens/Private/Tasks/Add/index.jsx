import React, { useState } from 'react'
import { Layout, Main } from 'components'
import { addTask } from './api'

const Add = () => {

    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(title, date, description)
    }

    return (
        <>
            <Layout>
                <Main title="Agregar Tareas" hideAddButton>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="">Título</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={title} 
                                onChange={e => setTitle(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Fecha</label>
                            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <textarea name="description" onChange={e => setDescription(e.target.value)}>
                                {description}
                            </textarea>
                        </div>

                        <button type="submit">Agregar</button>
                    </form>
                </Main>
            </Layout>
        </>
    )

}


export { Add }