import React from 'react'
import {render} from 'react-dom'
import './index.css'

import TaskList from './components/taskList'

const App  = () =>  {

    const descriptionStyle = {
      paddingBottom: "20px"
    }

    return (
        <div className='app'>
            <header className='app-header'>

                <h1>Hello World!</h1>
                <p style={descriptionStyle} className='description'>The most simple and amazing todo list for React app.</p>

               <TaskList/>

            </header>
        </div>
    )
}

render(<App/>, document.getElementById('root'))