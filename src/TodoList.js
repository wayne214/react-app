import React, { Fragment, Component } from 'react'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    _onTextChange = (e) => {
        // console.log('---eee--', e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    _onSubmit = () => {
        const data = this.state.inputValue;
        this.setState({
            list: [...this.state.list, data]
        })

    }

    _onItemDelte = (index) => {
        // immutable 
        // state 不允许我们有任何的改变
        const temp = [...this.state.list]
        temp.splice(index, 1)
        this.setState({
            list: temp
        })
    }
    render() {
        const { inputValue, list } = this.state
        return (
            <Fragment>
                <div>
                    {/* 点击标签label自动聚焦input输入框 */}
                    <label htmlFor='insertArea'>输入内容：</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={inputValue}
                        onChange={this._onTextChange} />
                    <button onClick={this._onSubmit}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index}
                                onClick={() => this._onItemDelte(index)}
                                // 转义html标签
                                dangerouslySetInnerHTML={{ __html: item }}
                            >
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;