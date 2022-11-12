import React from "react";
import { Link } from "react-router-dom";

const Curriculamstypes = () => {
    return(
        <div>
            <h2 className="p-2">Problem Statemants</h2>
        <Link className="btn  btnsc" exact to="/Audiance"><b>Audiance</b></Link><hr></hr>
        <Link className="btn" exact to="/Prerequisite"><b>Prerequisite</b></Link><hr></hr>
        <Link className="btn"  exact to="/Resources"><b>Resources</b></Link><hr></hr>
        <Link className="btn" exact to="/Trainer"><b>Trainer</b></Link><hr></hr>
        <Link className="btn" exact to="/Dashboard"><b>Dashboard</b></Link><hr></hr>
        <Link type="button" type='submit' className="btn btn logout m-auto" excat to="/Logout"><b>Logout</b></Link><hr/><br/><br/>
        </div>

    )


}
export default Curriculamstypes;