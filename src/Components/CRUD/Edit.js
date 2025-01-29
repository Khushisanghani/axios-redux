// import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../Api";
import { Button, Form } from "react-bootstrap";

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
        axiosInstance.put(`/crud/${id}`,{
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
                            <Button className="btn btn-primary">Read Data</Button>
                        </Link>
                    </div>
                    <div className="bg-primary p-4 text-center text-white">
                        <h1>Update Data</h1>
                    </div>
                    <Form onSubmit={handleUpdate}>
                        <div className="form-group ">
                            <Form.Label>Enter Name :</Form.Label>
                            <Form.Control type="text" placeholder="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <Form.Label>Enter Age :</Form.Label>
                            <Form.Control type="number" placeholder="Age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Form.Label>Enter Email :</Form.Label>
                            <Form.Control type="email" placeholder="Email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br/>
                        <div className="d-grid">
                        <Form.Control type="submit" value="Update" className="btn btn-primary"/>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Edit;