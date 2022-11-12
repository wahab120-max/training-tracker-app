import React from "react";
import classes from './Edit.Module.css';
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const EditAudiance = () => {
      let history = useHistory();
      const { id } = useParams();
    const [students, setUser] = useState({
        audiance:"",
    });
     
    const {audiance} = students;
    const onInputChange = e =>{
        setUser({...students,[e.target.name]: e.target.value});
    };
    useEffect(() =>{
        loadUser();
    }, []);
    const onSubmit = async e => {
        e.preventDefault();
         await axios.put(`http://localhost:3005/students/${id}`, students);
          history.push("/Audiance");
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
  </div>
  <button type="submit" class="btn btn-primary m-5 button-two">Update Audiance</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
    )
}

export default EditAudiance;