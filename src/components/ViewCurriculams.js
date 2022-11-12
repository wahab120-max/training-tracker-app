import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Fragment } from "react";


const ViewCurriculams =() =>{
    const [students, setUser] = useState({
        audiance:"",
        fresher:"",
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


    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3005/students/${id}`);
        setUser(res.data);
     }
     return(
         <Fragment>
         <div className="container">
             <Link className="btn btn-dark m-3" to="/Curriculams">Get Back To Curriculams </Link>
         </div>
         <h1 className="m-3 text-center"> Student</h1>
         <hr/>
         <div className="row">
             <div className="col-md-6 m-auto">
                 <div className="card view-card m-5">
         <ul className="list-group text-center">
             <li className="list-group-item">Audiance:-{students.audiance}</li>
             <li className="list-group-item">Prerequisite:- {students.prerequisite}</li>
             <li className="list-group-item">Resources:- {students.resources}</li>
             <li className="list-group-item">Trainer:- {students.trainer}</li>
             <li className="list-group-item">Training:- {students.trainingfor}</li>
             <li className="list-group-item">start Date:- {students.startdate}</li>
             <li className="list-group-item">End Date:- {students.enddate}</li>
             <li className="list-group-item">Start Time:- {students.startetime}</li>
             <li className="list-group-item">End Time:- {students.endtime}</li>
             <li className="list-group-item">Mode Of Training:- {students.modeoftraining}</li>
             <li className="list-group-item">Attendees:- {students.attendee}</li>
         </ul>
         </div>
         </div>
         </div>
         </Fragment>
         
     )
     
}

export default ViewCurriculams;


