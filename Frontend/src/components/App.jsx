import React from 'react';
import settings from '../settings'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoMessage: ""
        }
    }

    checkConnection = () => {
        // this.setState({
        //     ...this.state,
        //     infoMessage: ""
        // })

    }

    render() {
        return (
            <div className="app__wrapper">
                <i className="fas fa-rocket app_rocket-icon"></i>
                <h1
                    className="app_main-text">
                    Nasz pierwszy projekt!
                </h1>
                <button
                    className="app_check-btn"
                    onClick={this.checkConnection}>
                    Kliknij aby sprawdzić połączenie z backend!
                </button>
                <div
                    className="app_info-message">
                    {this.state.infoMessage}
                </div>
            </div>
        )
    }
}

export default App;