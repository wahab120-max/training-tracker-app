import React from "react";
import classes from './Edit.Module.css';
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const EditCurriculams = () => {
      let history = useHistory();
      const { id } = useParams();
    const [students, setUser] = useState({
        audiance:"",
        prerequisite:"",
        resources:"",
        trainer:"",
        trainingfor:"",
        startdate:"",
        enddate:"",
        startetime:"",
        endtime:"",
        modeoftraining:"",
        attendee:"",
    });
     
    const {audiance,prerequisite,resources,trainer,trainingfor,startdate,enddate,
        startetime,endtime,modeoftraining,attendee} = students;
    const onInputChange = e =>{
        setUser({...students,[e.target.name]: e.target.value});
    };
    useEffect(() =>{
        loadUser();
    }, []);
    const onSubmit = async e => {
        e.preventDefault();
         await axios.put(`http://localhost:3005/students/${id}`, students);
          history.push("/Curriculams");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3005/students/${id}`);
        setUser(result.data);
    };
    return (
       
        <div className="row">

<div className={classes.edit}>
<Link className="btn btn-dark m-5" to="/Curriculams">Get Back To Curriculams </Link>
    <h1 className="text-center mb-5">Edit Curriculam</h1>
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
<input type="text" name="audiance" value={audiance} onChange={e =>onInputChange(e)} class="form-control" id="inputAddress" placeholder="Fresher/Literal/Intern"/>
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
<input type="text" name="resources" value={resources}  onChange={e =>onInputChange(e)} class="form-control" id="inputAddress" placeholder="Net Connection"/>
</div>
</div><br></br>
<div className="row">
          <div className="col-md-2">
  <label> Trainer </label>&nbsp;</div>
<div className="col-md-6">
<input type="text" class="form-control" name="trainer" value={trainer} onChange={e =>onInputChange(e)} id="inputAddress" placeholder="Pankaj,Anita"/>
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
    <label className="mt-2" htmlFor="exampleInputEmail1 mr-5">Attendees</label>
    <input name="attendee" value={attendee} onChange={e =>onInputChange(e)} 
    type="number" class="form-control" placeholder="Enter present candidates"/>
  <button type="submit" class="btn btn-primary m-5 button-two">Update Student</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
    )
}

export default EditCurriculams;