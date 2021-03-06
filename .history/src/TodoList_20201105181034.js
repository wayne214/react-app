import React, {Fragment, useState, useEffect} from 'react'

const TodoList = () => {
    const [inputValue, setInputValue] = useState('dddd')

    useEffect(()=>{
        console.log('---in00', inputValue)
    },[inputValue])

    _textChange = () => {
        console.log('----change--')
    }
    return (
        <Fragment>
            <div><input value={inputValue} onChange={e => this._textChange(e.target.value)}/><button>提交</button></div>
            <ul>
                <li>学React Native</li>
                <li>学React</li>
            </ul>
        </Fragment>
    )
}

export default TodoList;