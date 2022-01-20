import React from 'react'
import {render} from 'react-dom'
import './index.css'

const App  = () =>  {

    return (
        <div className='app'>
            <header className='app-header'>

                <h1>Hello world!</h1>
                <p>The most simple and amazing todo list for React app.</p>

            </header>
        </div>
    )
}

render(<App/>, document.getElementById('root'))