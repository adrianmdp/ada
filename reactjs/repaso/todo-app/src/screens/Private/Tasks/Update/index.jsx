import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../../components'

const Update = () => {

    const { push } = useHistory()

    return (
        <>
            <Layout>
                <Main title="Actualizar tarea" handleAddClick={() => push('/tasks/add')} />
            </Layout>
        </>

    )

}

export { Update }