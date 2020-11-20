import React, {Component, Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
    }

    _handleTraggle = () => {
        // this.setState(()=>({
        //     show: !this.state.show
        // }))

        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }

    render() {
        return (
            <Fragment>
                {/*<div className={this.state.show ? 'show': 'hide'}>Hello world</div>*/}
                <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                >
                    <div>Hello react-transition</div>
                </CSSTransition>

                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition
                                    timeout={2000}
                                    classNames='fade'
                                    unmountOnExit
                                    key={item+index+''}
                                >
                                    <div>Hello transition item {index}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this._handleTraggle}>traggle</button>
            </Fragment>

        );
    }
}

export default App;
