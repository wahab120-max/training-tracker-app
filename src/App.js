
import './App.css';
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import React from 'react';
import AddNewCurriculam from './components/AddNewCurriculam';
import Input from './components/Input';
import Logout from './components/Logout';
import Home from './components/Home';
import EditCurriculams from './components/EditCurriculams';
import ViewCurriculams from './components/ViewCurriculams';
import Curriculams from './components/Curriculams';
import Audiance from './components/Audiance';
import Prerequisite from './components/Prerequisite';
import Resources from './components/Resources';
import Trainer from './components/Trainer';
import AddNewTrainer from './components/AddNewTrainer';
import AddNewAudiance from './components/AddNewAudiance';
import Footer from './components/Footer';
import ViewAudiance from './components/ViewAudiance';
import ViewPrerequisite from './components/ViewPrerequisite';
import Dashboard from './components/Dashboard';
import ViewResources from './components/ViewResources';
import ViewTrainer from './components/ViewTrainer';
import EditAudiance from './components/EditAudiance';




function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar/>
    <Switch>
    <Route excat path ="/Home" component={Home}/>
    <Route exact path ="/AddNewCurriculam" component={AddNewCurriculam}/>
    <Route exact path ="/Logout" component={Logout}/>
    <Route exact path="/Curriculams" component={Curriculams}/>
    <Route exact path="/Input" component={Input}/>
    <Route exact path="/EditCurriCulams/:id" component={EditCurriculams}/>
    <Route exact path="/ViewCurriculams/:id" component={ViewCurriculams}/>
    <Route exact path="/Audiance" component={Audiance}/>
    <Route excat path="/Prerequisite" component={Prerequisite}/>
    <Route exact path="/Resources" component={Resources}/>
    <Route exact path="/Trainer" component={Trainer}/>
    <Route exact path="/AddNewTrainer" componenet={AddNewTrainer}/>
    <Route exact path="/AddNewAudiance" componenet={AddNewAudiance}/>
    <Route exact path="/ViewAudiance/:id" component={ViewAudiance}/> 
    <Route exact path="/ViewPrerequisite/:id" component={ViewPrerequisite}/>
    <Route exact path="/ViewResources/:id" component={ViewResources}/>
    <Route exact path="/ViewTrainer/:id" component={ViewTrainer}/>
    <Route exact path="/Dashboard" component={Dashboard}/>
    <Route exact path="EditAudiance/:id" component={EditAudiance}/>
    </Switch> 
    </Router>
    <Footer/>
    </React.Fragment>
  );
}
export default App;
