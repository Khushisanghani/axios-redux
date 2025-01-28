import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit(){
    const navigate = useNavigate();
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    },[]);
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://679328645eae7e5c4d8dbc1f.mockapi.io/crud/${id}`,{
            emp_name:name,
            emp_age:age,
            emp_email:email
        }).then(() => {
            navigate('/');
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
                    <div className="bg-primary p-4 text-center text-white">
                        <h1>Update Data</h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="form-group ">
                            <label>Enter Name :</label>
                            <input type="text" placeholder="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Enter Age :</label>
                            <input type="number" placeholder="Age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Enter Email :</label>
                            <input type="email" placeholder="Email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br/>
                        <div className="d-grid">
                        <input type="submit" value="Update" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Edit;