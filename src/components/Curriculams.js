import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Curriculam.Module.css";
import Curriculamstypes from "./Curriculamstypes";

const Curriculams = () =>{
    const [students, setUser] = useState([]);
    useEffect(() =>{
       loadUsers();
    }, []);

    const loadUsers = async () =>{ 
    const result = await axios.get("http://localhost:3005/students");
    setUser(result.data);
    };

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3005/students/${id}`);
        loadUsers();
    };
    return( 
        <div>
            <div className={classes.Curriculams}>
                <div className="row">
                    <div className="col-md-2 types">
                        <div className="">
                        <Curriculamstypes/>
                        </div>
                    </div>
             <div className="col-md-10">
                 <h1 className="text-center m-4">Curriculams</h1>
             <Link className="btn addnew" exact to="/Input"><b>Add New Curriculiams</b></Link>
  <table className="table ">
    <thead class="tables">
        <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Audiance</th>
            <th scope="col">Prerequisite</th>
            <th scope="col">Resources</th>
            <th scope="col">Trainer</th>
            <th scope="col">Training For</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Mode Of Training</th>
            <th scope="col">Attendees</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th className="text-center">Actions</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        </tr>
    </thead>
    <tbody>
       
    {students.map((candidate, index) => ( 
      <tr>
       <th scope="row">{index+1}</th>
      <td>{candidate.audiance}</td>
      <td>{candidate.prerequisite}</td>
      <td>{candidate.resources}</td>
      <td>{candidate.trainer}</td>
      <td>{candidate.trainingfor}</td>
      <td>{candidate.startdate}</td>
      <td>{candidate.enddate}</td>
      <td>{candidate.startetime}</td>
      <td>{candidate.endtime}</td>
      <td>{candidate.modeoftraining}</td>
      <td>{candidate.attendee}</td>
      <td><Link className="btn btn-info btns p-2" type="button"  to={`/ViewCurriculams/${candidate.id}`}>View</Link></td>
     <td> <Link className="btn btn-light btns p-2" type="button" to={`/EditCurriculams/${candidate.id}`}>Edit</Link></td>
     <td> <button className="btn btn-danger btns p-2" type="button" onClick={() => deleteUser(candidate.id)}>Delete</button></td>


      </tr>
    ))
}
    
  </tbody>
</table>
</div>
</div>
</div>
            
        </div>
        
    )

}
export default Curriculams;