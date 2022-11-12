import React from "react";
import classes from './Navbar.Module.css'
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div className={classes.navbar}>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand nav" exact to="/Curriculams"><h2><b>Training Tracker App</b></h2></Link>
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <Link className="btn" excat to="/Home"><b>Home</b></Link>
      </li>
    </ul>
    {/* <Link type="button" type='submit' className="btn btn logout m-auto" excat to="/Logout">Logout</Link> */}
  
</nav>
</div>
    )   
}
export default Navbar;