import React, {Component} from 'react';
import styled from 'styled-components';


const Styles = styled.div`
height:100vh;
text-align:center;
background: #56CCF2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width:100%;
 border:0;
 margin:0;
 margin-right:0;

 .buttons{
     padding:10px;
     text-align:center;
     a{
        color:white;
        font-family:monospace;
        font-size:1.7vh;

        &:hover{
            color: #A4CCEB;
        }
     }
 }
`;


export default class Home extends Component{

    render(){
        return(
            <Styles>
            <div>
                <h3>Welcome to Fitness Tracker</h3>
                <h4>Log your exercises and track your fitness!</h4>
                <div className="links">
                <div className="buttons">
                    <a href="/userinfo">View your user information</a>
                    </div>
                    <div className="buttons">
                    <a href="/list">View your exercise list</a>
                    </div>
                    <div className="buttons">
                    <a href="/create">Create a new exercise log</a>
                    </div>
                    <div className="buttons">
                    <a href="/user">Create a new user</a>
                    </div>
                </div>
            </div>
            </Styles>
        )
    }
}