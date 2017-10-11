import React, { Component } from 'react';
import {appBase} from './base';
import Logout from './Logout';

class Login extends Component{
    constructor(props){
        super(props);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.state={
            redirect:false,
            loggedIn:false,
        }
    }
    //Function that create user in case the user does not exist and will log the user in
    createUser(event){
        console.log("Creating User");
        event.preventDefault();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const auth = appBase.auth();

        const promise = auth.createUserWithEmailAndPassword(email,password);
        promise.catch(e=> console.log(e.message));
    }

    //Function that authenticates the user. If the user exists and is authenticated this funciton will call setCurrentUser in App.js and will udpate the user there.
    authenticateUser(event){
        console.log("Authenticating User");
        event.preventDefault();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const auth = appBase.auth();

        const promise = auth.signInWithEmailAndPassword(email,password);
        promise.catch(e=> console.log(e.message));

        auth.onAuthStateChanged(firebaseUser =>{
            if(firebaseUser){
                this.setState({loggedIn: true});
                this.props.setCurrentUser(firebaseUser);
                console.log('Logged In');
                console.log(firebaseUser);
            } else {
                alert('Incorrect Email or Address')
                console.log('not logged in');
            }
        })
    }

    //Function that allows the user to logout. The button that calls this function can be found in Logout.js.
    logoutUser(){
        appBase.auth().signOut();
        this.setState({loggedIn:false});
        this.props.setCurrentUser(null);
    }
    render(){
        //If the state is logged in then the user has the possibility of logging out.
        console.log("Logged In: ",this.state.loggedIn);
        if(this.state.loggedIn === true){
            return <Logout logoutUser={this.logoutUser}/>
        }
        //The Following is the login form
        return (
            <div>
                <form>
                    {/*Email Input*/}
                    <input id="emailInput" type="email" placeholder="Email" ref={(input) => this.emailInput = input}/>

                    {/*Password Input*/}
                    <input id="passwordInput" type="password" placeholder="Password" ref = {(input)=>{this.passwordInput = input}}/>

                    {/*Login Button*/}
                    <button id="loginButton" className="btn btn-action" onClick={(e) => this.authenticateUser(e)}>
                        Log In
                    </button>

                    {/*SignUp Button*/}
                    <button id="signupButton" className="btn btn-secondary" onClick={(e) => this.createUser(e)}>
                        Sign Up
                    </button>

                </form>
            </div>
        )
    }
}
export default Login;

