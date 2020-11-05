import React, {Fragment, Component} from 'react'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    _onTextChange = (e) => {
        console.log('---eee--', e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    _onSubmit = ()=>{
        const data = this.state.inputValue;
        this.setState({
            list: [...this.state.list, data]
        })

    }
    render(){
        const {inputValue, list} = this.state
        return (
            <Fragment>
                <div>
                    <input value={inputValue} onChange={this._onTextChange}/>
                    <button onClick={this._onSubmit}>提交</button>
                </div>
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
}

export default TodoList;