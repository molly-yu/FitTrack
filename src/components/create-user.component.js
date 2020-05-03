import React, {Component} from 'react';
import axios from 'axios';
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

 .form-group{
     width:40%;
     margin-left:auto;
     margin-right:auto;

 }

 label{
     font-family:monospace;
     color:white;
     font-size:2vh;
 }

 .btn{
     background-color:#2F80ED;
     font-family:monospace;
 }
`;
export default class CreateUsers extends Component{

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this); // binding this
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { // variables
            username: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user) //post user to server database
        .then(res => console.log(res.data));
        

        // window.location = '/'; //back to homepage

        this.setState({
            username: ''
        })

    }

    render(){
        return(
            <Styles>
            <div>
                <h3>Create new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </Styles>
        )
    }
}