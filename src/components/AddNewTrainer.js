import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import classes from './Input.Module.css';
import Curriculamstypes from "./Curriculamstypes";



const AddNewTrainer =() => {
      let history = useHistory();
    const [students,setUser] = useState({
        trainer:"",
       
    });
     
    const {trainer} = students;

    const onInputChange = e =>{
        setUser({...students,[e.target.name]:e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
         await axios.post("http://localhost:3005/students", students);
          history.push("/Curriculams");
    };

    return (
       
        <div className="row">
                <Curriculamstypes/>

            <h1>hello</h1>
        <div className={classes.Form}>
         <div className="row">
            <div className="col-md-6 m-auto">
                <div className="card formcard m-5 p-5">
        <form onSubmit={e => onSubmit(e)}>  
  <div class="form-group">
    <label for="exampleInputEmail1">User Id</label>
    <input name="trainer" value={trainer} onChange={e =>onInputChange(e)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your id"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div> 
</div>
  </div>
    )
}
export default AddNewTrainer;