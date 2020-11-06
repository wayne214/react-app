import React, {Fragment, useState} from 'react'

const TodoList = () => {
    const [inputValue, setInputValue] = useState('dddd')
    return (
        <Fragment>
            <div><input value={inputValue} onChange={(e)=> console.log(e.target.value)}/><button>提交</button></div>
            <ul>
                <li>学React Native</li>
                <li>学React</li>
            </ul>
        </Fragment>
    )
}

export default TodoList;