import React from "react";
import logo from './logo.svg';
import "./Auth.scss";
import { Login } from "./components/login/login";
import { Register } from "./components/login/register";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingisActive: true,
        }
    }

    changeState() {
        const { isLoggingisActive } = this.state;
        if (isLoggingisActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }

        this.setState((prevState) => ({ isLoggingisActive: !prevState.isLoggingisActive }))


    }



    render() {
        const { isLoggingisActive } = this.state
        const current = isLoggingisActive ? "Register" : "Login";
        const currentActive = isLoggingisActive ? "login" : "register";
        return (
            <div className="auth" style={{paddingTop: '70px'}}>
                <div className="login">
                    <div className="container">
                        {isLoggingisActive && (
                            <Login containerRef={ref => (this.current) = ref} />)}
                        {!isLoggingisActive && (
                            <Register containerRef={ref => (this.current) = ref} />)}
                    </div>
                    <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
                </div>
            </div>
        )
    }
}


const RightSide = props => {
    return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
            <div className="text">{props.current}</div>
        </div>
    </div>
}

export default App;