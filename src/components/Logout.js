import { useState } from "react";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import classes from './Form.Module.css';

const Logout =() => {
  let history = useHistory();
  const [data,setData] = useState({
    userid:"",
    password:"",
  });

  const {userid,password} = data;

  const onInputChange = e =>{
    setData({data,[e.target.name]:e.target.value});
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://localhost:3005/data",data);
    history.push("/Dashboard");
  };


    return (

       <div className={classes.Form}>
        <div className="row mb-5">
            <div className="col-md-6 m-auto mb-5">
                <div className="card formcard m-5 p-5">
        <form onSubmit={e => onSubmit(e)}>  
  <div class="form-group">
    <label for="exampleInputEmail1">User Id</label>
    <input name="userid" value={userid} onChange={e =>onInputChange(e)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your id"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" value={password} onChange={e =>onInputChange(e)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary submit mb-5 mt-3">Submit</button>
</form>
</div>
</div>
</div>
</div>
    )
}
export default Logout;