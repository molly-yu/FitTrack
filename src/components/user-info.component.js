import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

 .table{
     background-color:white;
     width:60%;
     margin-left:auto; 
     margin-right:auto;
 }
`;
 
const User = props => ( //functional react exercise component, returns table row
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.bmi}</td>
        <td> 
            {/* <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" onClick={() => {props.deleteUser(props.user._id) }}>delete</a> */}
        </td>
    </tr>
)

export default class UserInfo extends Component{
constructor(props){
    super(props);
    this.state = {users: []};
    // this.deleteExercise = this.deleteExercise.bind(this);
    // this.state = {exercises: []};
}

componentDidMount(){ // get list of users from database
    axios.get('http://localhost:5000/users/')
    .then(response => {
        this.setState({ users: response.data })
    })
    .catch((error) => {
        console.log(error);
    })

}

    // deleteExercise(id){
    //     axios.delete('http://localhost:5000/exercises/' + id)
    //     .then(res => console.log(res.data));
    //     this.setState({ // automatically delete from table on page
    //         exercises: this.state.exercises.filter(el => el._id !== id)
    //     })
    // }

    usersList(){
        return this.state.users.map(currentuser => { // table rows (props)
            return <User user ={currentuser} /*deleteExercise={this.deleteExercise}*/ key={currentuser._id}/>;
        })
    }

    render(){
        return(
            <Styles>
            <div>
                <h3>User Information</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            {/* <th>Description</th>
                            <th>Duration</th>
                            <th>Calories Burned</th>
                            <th>Date</th>
                            <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.usersList()
                        }
                    </tbody>
                </table>
            </div>
            </Styles>
        )
    }
}