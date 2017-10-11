import React, { Component } from 'react';

class Logout extends Component{
    render(){
        console.log("Logout Option");
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>

                <button id="logoutButton" ref="logoutButton" className="btn btn-action"
                    onClick={(e) => this.props.logoutUser()}>
                    Log Out
                </button>
            </div>
        )
    }

} export default Logout;