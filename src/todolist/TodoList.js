import React, { Fragment, Component } from 'react'
import './style.css'
import TodoItem from "./TodoItem";
import Test from "./test";

/**
 *
 * React-----
 * 声明式开发
 * 可以与其他框架并存
 * 组件化
 * 单向数据流
 * 视图层框架
 * 函数式编程
 *
 * */

class TodoList extends Component {
    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变时，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
    }

    _onTextChange = (e) => {
        // console.log('---eee--', e.target.value)
        const value = this.input.value;
        this.setState({
            inputValue: e.target.value
        })
    }

    _onSubmit = () => {
        // const data = this.state.inputValue;
        // this.setState({
        //     list: [...this.state.list, data]
        // })

        this.setState((prevState)=>{
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })

    }

    _onItemDelte = (index) => {
        // immutable
        // state 不允许我们有任何的改变
        // const temp = [...this.state.list]
        // temp.splice(index, 1)
        // this.setState({
        //     list: temp
        // })

        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index, 1)
            return{
                list
            }
        })
    }

    getTodoItem = () => {
        const { list } = this.state
        return list.map((item, index) => {
            return <TodoItem key={index} content={item} onItemClick={()=> this._onItemDelte(index)}/>
            // return <li key={index}
            //            onClick={() => this._onItemDelte(index)}
            //     // 转义html标签
            //            dangerouslySetInnerHTML={{ __html: item }}
            // >
            // </li>
        })
    }
    render() {
        const { inputValue } = this.state
        return (
            <Fragment>
                <div>
                    {/* 点击标签label自动聚焦input输入框 */}
                    <label htmlFor='insertArea'>输入内容：</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={inputValue}
                        onChange={this._onTextChange}
                        ref={(input)=> {this.input = input}}
                    />
                    <button onClick={this._onSubmit}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>

                <Test content={'inputValue'}/>
            </Fragment>
        )
    }
}

export default TodoList;
