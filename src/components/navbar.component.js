import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar{
        text-align:center;
        background: #56CCF2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        position: fixed;
        top: 0;
        width: 100%;
        z-index:10;
        margin:0;
        border:0;
    }
    .navbar-brand, .navbar-nav, .nav-link .navbar-collapse{
        color: #f2f2f2;
        font-size: 20 px;

        &:hover{
            color: #A4CCEB;
            border-bottom: 3px;
        }
    }

    .navbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px;
            color: #A4CCEB;
          }
          
          &.active {
            border-bottom: 3px;
            color: #74AAD5;
          }
      }   
`;


export default class Navbar extends Component{

    render(){
        return(
            <Styles>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand">Fitness Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                            <Link to="/userinfo" className="nav-link">User Information</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/list" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">New Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">New User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </Styles>
        );
    }

}