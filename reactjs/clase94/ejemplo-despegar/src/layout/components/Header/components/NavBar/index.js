import React from 'react'
import { Button } from '../../../../../components'
import menu from './menu'

const NavBar = () => {

    return (
        <div>
            NavBar
            {menu.map(item => <Button 
                            text={item.text} 
                            icon={item.icon}
                            variant="vertical"
                            className="btn-primary"
                        />
            )}
        </div>
    )

}

export { NavBar }