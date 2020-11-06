import React, {Fragment, useState, useEffect} from 'react'

const TodoList = () => {
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState(['study flutter'])

    useEffect(()=>{
        console.log('---in00', inputValue)
    },[inputValue])

    return (
        <Fragment>
            <div><input value={inputValue} onChange={e => setInputValue(e.target.value)}/><button>提交</button></div>
            <ul>
                {
                    list.map((item,index)=>{
                    return <li>{item}</li>
                    })
                }
            </ul>
        </Fragment>
    )
}

export default TodoList;