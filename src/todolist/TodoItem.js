import React from 'react'

const TodoItem = ({content, onItemClick}) => {
    return (
        <div onClick={onItemClick}>
            {content}
        </div>
    )
}

export default TodoItem;
