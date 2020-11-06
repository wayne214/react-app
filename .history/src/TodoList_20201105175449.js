import React, {Fragment, useState} from 'react'

const TodoList = () => {
    cosnt [inputValue, setInputValue] = useState('')
    return (
        <Fragment>
            <div><input value={inputValue}/><button>提交</button></div>
            <ul>
                <li>学React Native</li>
                <li>学React</li>
            </ul>
        </Fragment>
    )
}

export default TodoList;