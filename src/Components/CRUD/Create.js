// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../Api";
import { Button, Form } from "react-bootstrap";
import * as z from "zod";

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    age: z.number().min(0, { message: "Age must be a positive number" }),
    email: z.string().email({ message: "Invalid email address" })
  });
function Create(){
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            age: parseInt(age),
            email
          };

          const validation = schema.parse(formData);
          if (!validation.success) {
            const formErrors = {};
            validation.error.errors.forEach(err => {
              formErrors[err.path[0]] = err.message;
            });
            setErrors(formErrors);
          } else {
            setErrors({});
             axiosInstance.post('/crud', {  
                emp_name:name,
                emp_age:age,
                emp_email:email
            }).then(() =>
                navigate("/")
            ).catch ((error) => 
            console.error(error)
    )
       }      
    }
    return(
        <>
            <div className="row">
                <div className="col-md-4">
                <div className="mb-2 mt-2">
                        <Link to="/">
                            <Button className="btn-primary">Read Data</Button>
                        </Link>
                    </div>
                    <div className="bg-primary p-4 text-center">
                        <h1>Create Data</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <Form.Label>Enter Name :</Form.Label>
                            <Form.Control type="text" placeholder="name" className="form-control" onChange={(e) => setName(e.target.value)}/>
                            {errors.name && <p className="text-danger">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <Form.Label>Enter Age :</Form.Label>
                            <Form.Control type="number" placeholder="Age" className="form-control" 
                            onChange={(e) => setAge(e.target.value)}/>
                            {errors.age && <p className="text-danger">{errors.age}</p>}
                        </div>
                        <div className="form-group">
                            <Form.Label>Enter Email :</Form.Label>
                            <Form.Control type="email" placeholder="Email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)}/>
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </div>
                        <br/>
                        <div className="d-grid">
                        <Form.Control type="submit" value="submit" className="btn btn-primary"/>
                        </div>
                    </Form>
                    {name}<br/>{age}<br/>{email}
                </div>
            </div>
        </>
    )
}
export default Create;
// axios.post('https://679328645eae7e5c4d8dbc1f.mockapi.io/crud',{
        //     emp_name:name,
        //     emp_age:age,
        //     emp_email:email
        //  })
        //  .then(() => {
        //     navigate("/");
        // }).catch((error)=>{
        //     console.log(error);
        // })