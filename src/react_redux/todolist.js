import React, {Component} from 'react'
import { connect } from 'react-redux'


class Todolist extends Component {
    render() {
        return(
            <div>
                <div>
                    <input value={this.props.inputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>hello </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps)(Todolist);
