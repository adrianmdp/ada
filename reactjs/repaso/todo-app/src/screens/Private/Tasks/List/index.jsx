import React from 'react'
import { Layout, Main } from 'components'
import { useHistory } from 'react-router-dom'

const List = () => {

    const { push } = useHistory()

    return (
        <>
            <Layout>
                <Main title="Tareas" handleAddClick={() => push('/tasks/add')} />
            </Layout>
        </>

    )

}

export { List }