import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './Login'

const Public = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={ Login } />
            </Switch>
            
            {/* <div>Public</div>
            
            {(4 + 4 === 8) ? (
                <>
                    <div>
                        <h1>Título</h1>
                        <table>

                        </table>
                        
                    </div>
                    <div>
                        Otro div
                    </div>
                </>
            ) : (
                <div>
                    <form action="">

                    </form>
                    <ul>

                    </ul>
                </div>
            )}
            
            
            {(4 + 4 === 9) &&
                <>
                    <div>
                        <h1>Título 2</h1>
                        <table>

                        </table>
                        
                    </div>
                    <div>
                        Otro div
                    </div>
                </>
            } */}
        </Router>
        )
    }
    
    export { Public }