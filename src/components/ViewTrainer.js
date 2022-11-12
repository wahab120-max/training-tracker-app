import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import classes from './Curriculam.Module.css';


const ViewTrainer =() =>{
    const [students, setUser] = useState({
        trainer:"",
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
             <div className={classes.Curriculams}>
         <div className="container">
             <Link className="btn btn-dark m-3" to="/Trainer">Get Back To Trainer </Link>
         </div>
         <h1 className="m-3 text-center"> Trainer </h1>
         <hr/>
         <div className="row">
             <div className="col-md-6 m-auto">
                 <div className="card view-card audiance-view-card mb-5">
         <ul className="list-group text-center">
             <li className="list-group-item m-5">Trainer:-{students.trainer}</li>
         </ul>
         </div>
         </div>
         </div>
         </div>
         </Fragment>
         
     )
     
}

export default ViewTrainer;


