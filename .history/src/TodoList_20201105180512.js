import React, {Fragment, useState, useEffect} from 'react'

const TodoList = () => {
    const [inputValue, setInputValue] = useState('dddd')

    _handleChange = (e) =>{
        console.log('---e--',e.target.value)
    }

    useEffect(()=>{
        console.log('---in00', inputValue)
    },[inputValue])
    return (
        <Fragment>
            <div><input value={inputValue} onChange={(e)=> console.log('--ee--', e)}/><button>提交</button></div>
            <ul>
                <li>学React Native</li>
                <li>学React</li>
            </ul>
        </Fragment>
    )
}

export default TodoList;