import React from 'react'
import { Layout } from 'components'
import { Main } from 'components'
import { useHistory } from 'react-router-dom'

const List = () => {

    const { push } = useHistory()

    return (
        <Layout>
            <Main title="Usuarios" handleAddClick={() => push('/users/add')} />
        </Layout>
    )

}

export { List }