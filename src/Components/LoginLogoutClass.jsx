import React from "react";

class LoginLogoutClass extends React.Component{
    constructor(props){
        super(props)
        this.state= {isLoggedIn: false}
    }

    toggleLogin = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }

    render(){
        return(
            <>
            <div>
                {this.state.isLoggedIn ? 
                (<h1>Welcome Back</h1>): (<h1>Please Login</h1>)
            }
            </div>
            <button onClick={this.toggleLogin}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
            </>
        )
    }
}

export default LoginLogoutClass