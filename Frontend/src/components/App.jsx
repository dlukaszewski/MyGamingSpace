import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import settings from '../settings'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infoMessage: "",
            icon: "fas fa-rocket app_rocket-icon",
            iconAnimation: true
        }
    }


    checkConnection = () => {
        this.setState({
            ...this.state,
            icon: "fas fa-thumbs-up app_rocket-icon"
        })
    }

    render() {
        return (
            <div className="app__wrapper">
                <TransitionGroup className="app_animation-container">
                    <CSSTransition
                        in={this.state.iconAnimation}
                        key={this.state.icon}
                        appear={true}
                        timeout={1000}
                        classNames="fade"
                    >
                        <i className={this.state.icon} key="icon"></i>
                    </CSSTransition>
                </TransitionGroup>
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