import React from 'react'
import PropTypes from 'prop-types'
/**
 * propTypes 和 defaultProps
 * 官方文档：https://reactjs.org/docs/typechecking-with-proptypes.html
 *
 *
 * */

const TodoItem = ({content, test, onItemClick}) => {
    return (
        <div onClick={onItemClick}>
            {test}:{content}
        </div>
    )
}
// 属性校验
TodoItem.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
    onItemClick : PropTypes.func,
}
// 设置属性的默认值
TodoItem.defaultProps = {
    test: '测试'
}

export default TodoItem;
