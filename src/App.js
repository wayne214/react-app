import React, {Component, Fragment} from 'react'
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    _handleTraggle = () => {
        this.setState(()=>({
            show: !this.state.show
        }))
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show': 'hide'}>Hello world</div>
                <button onClick={this._handleTraggle}>traggle</button>
            </Fragment>

        );
    }
}

export default App;
