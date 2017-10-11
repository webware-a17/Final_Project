import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
    constructor(){
        super();
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.state ={
            authenticated:false,
            currentUser: null
        }
    }
    //Function is called by in Login file. It will update the user to the state.currentUser.
    setCurrentUser(user){
        if(user){
            this.setState({
                currentUser:user,
                authenticated:true
            })
        }else{
            this.setState({
                currentUser:null,
                authenticated:false
            })
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Login setCurrentUser={this.setCurrentUser}/>
            </div>
        );
}
}

export default App;
