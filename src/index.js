import React from 'react'
import {render} from 'react-dom'
import './index.css'

const App  = () =>  {

    const descriptionStyle = {
      paddingBottom: "20px"
    }

    return (
        <div className='app'>
            <header className='app-header'>

                <h1>Hello World!</h1>
                <p style={descriptionStyle} className='description'>The most simple and amazing todo list for React app.</p>

                <ul>
                    <li className='tasks-item'>Follow me on <a href='https://github.com/bryeduria'>Github</a>.</li>
                </ul>

            </header>
        </div>
    )
}

render(<App/>, document.getElementById('root'))