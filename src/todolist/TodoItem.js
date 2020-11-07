import React from 'react'
import PropTypes from 'prop-types'
/**
 * propTypes 和 defaultProps
 * 官方文档：https://reactjs.org/docs/typechecking-with-proptypes.html
 *
 *
 * */

const TodoItem = ({content, test, onItemClick}) => {
    // Vue.js
    // JSX模板->createElement->虚拟DOM(js对象)->真实DOM
    // return React.createElement('div', {}, 'item')
    // 虚拟DOM:
    /**
     *  1. 性能提升，
     *  2. 跨端应用实现
     *
     */


    return (
        <div onClick={onItemClick}>
            {test}:{content}
        </div>
    )
}
// 属性校验
TodoItem.propTypes = {
    content: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    onItemClick : PropTypes.func,
}
// 设置属性的默认值
TodoItem.defaultProps = {
    test: '测试'
}

export default TodoItem;
