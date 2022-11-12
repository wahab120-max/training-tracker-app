import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard =() =>{
    const [data, setData] = useState([]);
    useEffect(() => {
        loadUser();
    },[]);

    const loadUser =async () => {
        const result = await axios.get("http://localhost:3005/user");
        setData(result.data.reverse());
    };
    return(
        <div>
            <Link className="btn btn-dark ml-5" to="/Curriculams">Get Back To Curriculams </Link>
            <div className="row">
                <h1 className="text-center">Welcome To Dashboard</h1>
            <div className="col-md-6 m-auto">
            <table className="table table-border m-5">
                <thead class="tables">
                    <tr>
                        <th className="text-center" scope="col">User Id</th>
                        <th scope="col">Passcode</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((userdata,i) =>(
                        <tr key={i}>
                            <td className="text-center">{userdata.userid}</td>
                            <td>{userdata.password}</td>
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
export default Dashboard;