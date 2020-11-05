import React, {Fragment} from 'react'

const TodoList = () => {
    return (
        <Fragment>
            <div><input/><button>提交</button></div>
            <ul>
                <li>学React Native</li>
                <li>学React</li>
            </ul>
        </Fragment>
    )
}

export default TodoList;