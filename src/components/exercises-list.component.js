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
 
const Exercise = props => ( //functional react exercise component, returns table row
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.caloriesBurned}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td> 
            <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExercisesList extends Component{
constructor(props){
    super(props);
    
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {exercises: []};
}

componentDidMount(){ // get list of exercises from database
    axios.get('http://localhost:5000/exercises/')
    .then(response => {
        this.setState({ exercises: response.data })
    })
    .catch((error) => {
        console.log(error);
    })

}

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/' + id)
        .then(res => console.log(res.data));
        this.setState({ // automatically delete from table on page
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList(){
        return this.state.exercises.map(currentexercise => { // table rows (props)
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render(){
        return(
            <Styles>
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Calories Burned</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.exerciseList()
                        }
                    </tbody>
                </table>
            </div>
            </Styles>
        )
    }
}