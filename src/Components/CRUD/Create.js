import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create(){
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://679328645eae7e5c4d8dbc1f.mockapi.io/crud',{
            emp_name:name,
            emp_age:age,
            emp_email:email
         })
         .then(() => {
            navigate("/");
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <>
            <div className="row">
                <div className="col-md-4">
                <div className="mb-2 mt-2">
                        <Link to="/">
                            <button className="btn btn-primary">Read Data</button>
                        </Link>
                    </div>
                    <div className="bg-primary p-4 text-center">
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Enter Name :</label>
                            <input type="text" placeholder="name" className="form-control" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Enter Age :</label>
                            <input type="number" placeholder="Age" className="form-control" 
                            onChange={(e) => setAge(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Enter Email :</label>
                            <input type="email" placeholder="Email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br/>
                        <div className="d-grid">
                        <input type="submit" value="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                    {name}<br/>{age}<br/>{email}
                </div>
            </div>
        </>
    )
}
export default Create;