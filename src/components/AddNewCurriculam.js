import { render } from "@testing-library/react";
import React from "react";
import classes from './NewCurriculam.Module.css';

class AddNewCurriculam extends React.Component{
    constructor(props){
        super(props);
        this.state={
            AddNewCurriculam:[
            ],
            trainingfor:'',
            startdate:'',
            enddate:'',
            startetime:'',
            endtime:'',
            modeoftraining:'',
            attendence:'',
            option:'',
        }
        

        this.training=this.training.bind(this);
        this.sdate=this.sdate.bind(this);
        this.edate=this.edate.bind(this);
        this.stime=this.stime.bind(this);
        this.etime=this.etime.bind(this);
        this.mtraining=this.mtraining.bind(this);
        this.attende=this.attende.bind(this);
        this.Alldata=this.Alldata.bind(this);
        this.options=this.options.bind(this);

        
    }


        options(preventDefault){
            this.setState({
                option:preventDefault.target.value
            })
        }


        training(newvalue){
            this.setState({
                trainingfor:newvalue.target.value
            });
        }
        sdate(newvalue){
            this.setState({
                startdate:newvalue.target.value
            });
        }
        edate(newvalue){
            this.setState({
                enddate:newvalue.target.value
            });
        }
        stime(newvalue){
            this.setState({
                startetime:newvalue.target.value
            });
        }
            etime(newvalue){
                this.setState({
                    endtime:newvalue.target.value
                });
            }
            mtraining(newvalue){
                    this.setState({
                        modeoftraining:newvalue.target.value
                    });
        }
            attende(newvalue){
            this.setState({
                attendence:newvalue.target.value
            });
        }

        Alldata(){
            this.setState({

                AddNewCurriculam:[...this.state.AddNewCurriculam,
                {trainingfor:this.state.trainingfor,
                startdate:this.state.startdate,
                enddate:this.state.enddate,
                startetime:this.state.startetime,
                endtime:this.state.endtime,
                modeoftraining:this.state.modeoftraining,
                attendence:this.state.attendence,
                option:this.state.option,
            }]

            });
        }
        

    render(){
    return(
        <div className="container">
            <h1 className="text-center m-5">Add New Curriculum</h1>
            <div className={classes.form}>
            
            <div className="card addcard m-5 p-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
  <div className="form-group">
      <div className="row">
          <div className="col-md-2">
  <label> Audience </label>&nbsp;</div>
  <div className="col-md-4">
<select className="form-control">
<option value={this.state.option} onChange={this.options}>select
</option>
 <option value = {this.state.option} onChange={this.options}> Fresher
</option> 
<option value = {this.state.option} onChange={this.options}> Literal
</option>
<option value = {this.state.option} onChange={this.options}> Intern
</option> 

</select><br></br></div>
<div className="col-md-6">
<input type="text" class="form-control" id="inputAddress" placeholder=""/>
</div>
</div>

<div className="row">
          <div className="col-md-2">
  <label>  Prerequisite </label>&nbsp;</div>
  <div className="col-md-4">
<select className="form-control">
<option value = {this.state.option} onClick={this.options}> select
</option>
<option value = "frsher"> Ui
</option>
<option value = "literal"> HTML, Css
</option>
<option value = "intern"> JavaScript
</option>
</select><br></br></div>
<div className="col-md-6">
<input type="text" class="form-control" id="inputAddress" placeholder=""/>
</div>
</div>
<div className="row">
          <div className="col-md-2">
  <label> Resources </label>&nbsp;</div>
  <div className="col-md-4">
<select className="form-control">
<option value = "empty"> select
</option>
<option value = "frsher"> Internet Connection
</option>
</select><br></br></div>
<div className="col-md-6">
<input type="text" class="form-control" id="inputAddress" placeholder=""/>
</div>
</div>
<div className="row">
          <div className="col-md-2">
  <label> Trainer </label>&nbsp;</div>
  <div className="col-md-4">
<select className="form-control">
<option value = "empty"> select
</option>
<option value = "frsher"> Pankaj Sharma
</option>
<option value = "literal">Miss Anita
</option>
</select><br></br></div>
<div className="col-md-6">
<input type="text" class="form-control" id="inputAddress" placeholder=""/>
</div>
</div>
    <label>Training For</label>
    <input value={this.state.trainingfor} onChange={this.training} class="form-control" placeholder="like react or sap"/>
  </div>
  <div className="row">
      <div className="col-md-6">
  <div class="form-group mt-2">
  <label>Start Date</label>
    <input value={this.state.startdate} onChange={this.sdate} type="date" class="form-control"  placeholder=""/>
  </div></div>
  <div className="col-md-6">
  <div class="form-group mt-2">
  <label>End Date</label>
    <input value={this.state.enddate} onChange={this.edate} type="date" class="form-control" placeholder=""/>
  </div>
  </div>
  </div>
  <div className="row">
      <div className="col-md-6">
  <div class="form-group mt-2">
  <label>Start Time</label>
    <input value={this.state.startetime} onChange={this.stime} type="time" class="form-control"  placeholder=""/>
  </div></div>
  <div className="col-md-6">
  <div class="form-group mt-2">
  <label htmlFor="inputAddress">End Time</label>
    <input value={this.state.endtime} onChange={this.etime} type="time" name="eta"class="form-control"placeholder=""/>
  </div>
  </div>
  </div>
  <label className="mt-2" htmlFor="exampleInputEmail1 mr-5">Mode Of Training</label>
    <input value={this.state.modeoftraining} onChange={this.mtraining} type="text" class="form-control" aria-describedby="emailHelp" placeholder="like ILT"/>
    <label className="mt-2" htmlFor="exampleInputEmail1 mr-5">Attendees</label>
    <input value={this.state.attendence} onChange={this.attende} type="number" class="form-control" aria-describedby="emailHelp" placeholder="Enter present candidates"/>
  <button onClick={this.Alldata} type="submit" class="btn btn-primary m-5">Submit</button>
  </div>
  </div>
  </div>
</div>
<table className="table table-bordere m-5">
    <thead class="tables">
        <tr>
            <th scope="col">sr no</th>
            <th scope="col">Audiance</th>
            <th scope="col">Training For</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Mode Of Training</th>
            <th scope="col">Attendees</th>
        </tr>
    </thead>
    <tbody>
        {this.state.AddNewCurriculam.map((data,i)=>{
            return[
                <tr key={i}>
                    <td>{++i}</td>
                    <td>{data['option']}</td>
                    <td>{data['trainingfor']}</td>
                    <td>{data['startdate']}</td>
                    <td>{data['enddate']}</td>
                    <td>{data['startetime']}</td>
                    <td>{data['endtime']}</td>
                    <td>{data['modeoftraining']}</td>
                    <td>{data['attendence']}</td>
                </tr>
            ]
        })}
    </tbody>
    </table> 

</div>



    );
}
}

export default AddNewCurriculam;