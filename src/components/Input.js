import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import classes from './Input.Module.css';


const Input =() => {
      let history = useHistory();
    const [students,setUser] = useState({
        audiance:"",
        fresher:"",
        literal:"",
        intern:"",
        prerequisite:"",
        resources:"",
        trainer:"",
        trainingfor:"",
        startdate:"",
        enddate:"",
        startetime:"",
        endtime:"",
        modeoftraining:"",
        attendee:""
    });
     
    const {audiance,prerequisite,resources,trainer,
        trainingfor,startdate,enddate,startetime,endtime,modeoftraining,
        attendee} = students;

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
            <div className="col-md-2">

             </div>

<div className={classes.form}>
    <h1 className="text-center m-5">Add New Curriculam</h1>
<div className="card addcard m-5 p-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <form onSubmit={e => onSubmit(e)}>
  <div className="form-group">
      <div className="row">
          <div className="col-md-2">
  <label> Audience </label>&nbsp;</div>
<div className="col-md-6">
<input type="text" name="audiance" 
value={audiance} 
onChange={e =>onInputChange(e)} 
class="form-control"  placeholder="Fresher/Literal/Intern"/>
</div>
</div><br></br>

<div className="row">
          <div className="col-md-2">
  <label>  Prerequisite </label>&nbsp;</div>
<div className="col-md-6">
<input type="text" name="prerequisite" value ={prerequisite} onChange={e =>onInputChange(e)} class="form-control" id="inputAddress" placeholder="Ui/HTML,Css,JavaScript"/>
</div>
</div><br></br>
<div className="row">
          <div className="col-md-2">
  <label> Resources </label>&nbsp;</div>
<div className="col-md-6">
<input type="text" class="form-control" name="resources" value={resources}  onChange={e =>onInputChange(e)} id="inputAddress" placeholder="Net Connection"/>
</div>
</div><br></br>
<div className="row">
          <div className="col-md-2">
  <label> Trainer </label>&nbsp;</div>
<div className="col-md-6">
<input type="text" name="trainer" value={trainer} onChange={e =>onInputChange(e)} class="form-control" id="inputAddress" 
placeholder="Pankaj,Anita"/>
</div>
</div><br></br>
    <label>Training For</label>
    <input name="trainingfor" value={trainingfor} onChange={e =>onInputChange(e)} class="form-control" placeholder="like react or sap"/>
  </div>
  <div className="row">
      <div className="col-md-6">
  <div class="form-group mt-2">
  <label>Start Date</label>
    <input name="startdate" value={startdate} onChange={e =>onInputChange(e)} type="date" class="form-control"  placeholder=""/>
  </div></div>
  <div className="col-md-6">
  <div class="form-group mt-2">
  <label>End Date</label>
    <input name="enddate" value={enddate} onChange={e =>onInputChange(e)} type="date" class="form-control" placeholder=""/>
  </div>
  </div>
  </div>
  <div className="row">
      <div className="col-md-6">
  <div class="form-group mt-2">
  <label>Start Time</label>
    <input name="startetime" value={startetime} onChange={e =>onInputChange(e)} type="time" class="form-control"  placeholder=""/>
  </div></div>
  <div className="col-md-6">
  <div class="form-group mt-2">
  <label htmlFor="inputAddress">End Time</label>
    <input name="endtime" value={endtime} onChange={e =>onInputChange(e)} type="time" class="form-control"placeholder=""/>
  </div>
  </div>
  </div>
  <label className="mt-2" htmlFor="exampleInputEmail1 mr-5">Mode Of Training</label>

    <input name="modeoftraining" value={modeoftraining} onChange={e =>onInputChange(e)} 
    type="text" class="form-control" placeholder="like ILT/Remote"/>
    <label className="mt-2 mr-5">Attendees</label>
    <input name="attendee" value={attendee} onChange={e =>onInputChange(e)} 
    type="number" class="form-control" placeholder="Enter present candidates"/>
  <button type="submit" class="btn btn-primary m-5 button-two">Submit</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
    )
}
export default Input;