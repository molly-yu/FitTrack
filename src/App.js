import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import UserInfo from './components/user-info.component';
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="cont">
      <Navbar/>
      <br/>
      <Route path="/" exact component={Home}/>
      <Route path="/userinfo" component={UserInfo}/>
      <Route path="/list" exact component={ExercisesList}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
