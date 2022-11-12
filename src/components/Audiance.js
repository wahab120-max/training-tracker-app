import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Curriculam.Module.css";
import Curriculamstypes from "./Curriculamstypes";

const Audiance = () =>{
    const [students, setUser] = useState([]);
    useEffect(() =>{
       loadUsers();
    }, []);

    const loadUsers = async () =>{ 
    const result = await axios.get("http://localhost:3005/students");
    setUser(result.data);
    };

    return( 
            <div className={classes.Curriculams}>
                <div className="row">
                    <div className="col-md-2 types">
                        <div className="">
                            <Curriculamstypes/>
                        </div>
                     </div>
                     
             <div className="col-md-2 mt-5">
             <Link className="btn btn-dark mt-4" to="/Curriculams">Get Back To Curriculams </Link>
             </div>
             <div className="col-md-1"></div>
             <div className="col-md-3 m-5">
             {/* <Link className="btn new-audiance mr-auto" exact to="/AddNewAudiance">Add New Audiance</Link>   */}
               
  <table className="table all-cards">
    <thead class="tables">
        <tr>
            <th className="text-center" scope="col">Sr.no</th>
            <th scope="col">Audiance</th>
            <th className="text-center" scope="col">Actions</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        </tr>
    </thead>
    <tbody>    
    {students.map((candidate, index) => ( 
      <tr>
       <th className="text-center" scope="row">{index+1}</th>
      <td>{candidate.audiance}</td>
      <td><Link className="btn btn-info btns p-2" type="button"  to={`/ViewAudiance/${candidate.id}`}>View</Link></td>
      {/* <td><Link className="btn btn-light btns p-2" type="button"  to={`/EditAudiance/${candidate.id}`}>Edit</Link></td> */}

       </tr> 
     ))
}    
  </tbody>
</table>
</div>
</div>
</div>

        
    )

}
export default Audiance;