import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout } from 'components'
import { Main } from 'components'

const Update = () => {

    const { push } = useHistory()

    return (
        <Layout>
            <Main title="Actualizar usuario" handleAddClick={() => push('/users/add')} />
        </Layout>
    )

}

export { Update }