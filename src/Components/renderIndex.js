import React, { Component } from 'react'
import HomePage from './home'
import LoginPage from './login'

export default class RenderIndex extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true,
        }
    }
    
    render() {
        const {isLoggedIn} = this.state;
        if (isLoggedIn) {
            return <HomePage />

        }else{  
            return <LoginPage />
        }
    }
    
}
